pipeline {
    agent any

    stages {
        stage('Build') {
            parallel {
                stage('Build Client') {
                    steps {
                        dir('client') {
                            script {
                                docker.build('client-image', '-f Dockerfile .')
                            }
                        }
                    }
                }
                stage('Build Server') {
                    steps {
                        dir('server') {
                            script {
                                docker.build('server-image', '-f Dockerfile .')
                            }
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker-compose -f docker-compose.yml up --build -d
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
