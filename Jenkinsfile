pipeline {
  
  agent any
  
  environment {
    CHROME_BIN = '/bin/google-chrome'
  }
  
  tools {nodejs "node"}
  
  stages {
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'node -v'
        sh 'npm run build'
      }
    }
    stage('Unit Tests') {
      steps {
        sh 'npm run test'
      }
    }
    stage('e2e Tests') {
      steps {
        sh 'npm run cypress:ci'
      }
    }
  }
}
