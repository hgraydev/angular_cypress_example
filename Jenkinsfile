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
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
  post {
        always {
            junit (
                testResults: 'results/cypress-report.xml',
                testDataPublishers: [
                jiraTestResultReporter(
                    configs: [
                    jiraStringField(fieldKey: 'summary', value: '${DEFAULT_SUMMARY}'),
                    jiraStringField(fieldKey: 'description', value: '${DEFAULT_DESCRIPTION}'),
                    jiraStringArrayField(fieldKey: 'labels', values: [jiraArrayEntry(value: 'Jenkins'), jiraArrayEntry(value:'Integration')])
                    ],
                projectKey: 'JIR',
                issueType: '6',
                autoRaiseIssue: true,
                autoResolveIssue: false,
                autoUnlinkIssue: false,
            )
                   ]
)
        }
    }
}
