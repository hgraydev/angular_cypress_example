pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
            }
        }
    }
}
