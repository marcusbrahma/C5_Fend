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
        stage('Test') {
                    steps {
                        bat 'C:/ProgramData/Jenkins/.jenkins/workspace/C5_frontend_app/jenkins/test.bat
                    }
                }
    }
}