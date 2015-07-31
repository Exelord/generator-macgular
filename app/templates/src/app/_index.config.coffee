app = angular.module '<%- appName %>'

app.config ($logProvider) ->
  # Enable log
  $logProvider.debugEnabled true
