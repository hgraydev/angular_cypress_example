pipeline {
  
  agent any
 
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
  }
}
