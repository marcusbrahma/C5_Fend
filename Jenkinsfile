pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deliver') {
                        steps {
                            dir ("jenkins"){
                            bat 'deliver.bat'
                            }
                            }
                        }
        stage('Deploy') {
                        steps {
                            dir ("jenkins"){
                            bat 'deploy.bat'
                            input message: 'Finished using the web site? (Click "Proceed" to continue)'
                            }
                            }
                        }
    }
}