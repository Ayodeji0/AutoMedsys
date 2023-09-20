pipeline{

    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute")
        choice(name: "BROWSER", choices:['chrome', 'edge', 'firefox'], description: "Enter the browser you wish to execute your test")
    }

    options{
        ansiColor('xterm')
    }

    stages{

        stage('Building'){
            steps{
           echo 'Building the application'
            }
        
        }

        stage('Testing'){
         steps{
            bat "npn 1"
            bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
         }
        }

        stage('Deploying'){
            steps{
            echo 'Deploying the Application'
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

}