pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
        PATH = 
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'C:\Users\marcu\Documents\BITS\C5 - Agile and DevOps\Demo\test_demo.py'
            }
        }
        stage('Deliver') {
            steps {
                bat '/jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat '/jenkins/scripts/kill.sh'
            }
        }
    }
}
