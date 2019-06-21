pipeline {
    agent {
        node {
            label 'master'
        }
    }
    triggers {
        pollSCM('H/5 * * * *')
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
    }
    parameters {
        string(name: 'BASE_REF', defaultValue: 'https://amphibian.intero.berlin', description: 'URL the app shall be accessible from')
        string(name: 'WEB_ROOT', defaultValue: '/var/www/amphibian', description: 'Web root directory for this app')
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'git@github.com:florianschwanz/amphibian8.git', branch: 'master'
            }
        }
        stage('Init submodules') {
            steps {
                sh "git submodule init"
                sh "git submodule update"
            }
        }
        stage('Build Angular') {
            steps {
                sh "npm install"
                sh "npm run build-prod -- --verbose --base-href ${params.BASE_REF}"
            }
        }
        stage('Test') {
            steps {
                sh "npm run test"
                junit allowEmptyResults: true, testResults: 'reports/**/test-results.xml'
            }
        }
        stage('Lint') {
            steps {
                sh "npm run lint-junit"
                junit allowEmptyResults: true, testResults: 'reports/**/lint-results.xml'
            }
        }
        stage('Compodoc') {
            steps {
                sh "npm run compodoc"
                publishHTML (target: [
                  allowMissing: true,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'reports/documentation',
                  reportFiles: 'index.html',
                  reportName: "Compodoc"
                ])
            }
        }
        stage('Deploy') {
            steps {
                sh "mkdir -p ${params.WEB_ROOT}"
                sh "rm -rf ${params.WEB_ROOT}/*"
                sh "cp -R ${WORKSPACE}/dist/* ${params.WEB_ROOT}"
            }
        }
    }
}
