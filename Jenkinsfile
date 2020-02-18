pipeline {
  agent any
 
  tools {nodejs "/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation"}
 
  stages {
    stage('Example') {
      steps {
        sh 'npm install'
      }
    }
  }
}
