pipeline {
  agent any
 
  tools {nodejs "/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/node"}
 
  stages {
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
