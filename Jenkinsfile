pipeline {
  
  agent any
 
  tools {nodejs "node"}
  
  stages {
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
