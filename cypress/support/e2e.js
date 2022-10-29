import './commands'
import './request/user/user'
import 'cypress-mochawesome-reporter/register'
require('cypress-grep')()
require('cypress-terminal-report/src/installLogsCollector')()
require('cypress-plugin-api')