desc "This task is called by the Heroku cron add-on to keep the website alive"
task :call_page => :environment do
  puts "starting call page task"
  uri = URI.parse('http://josecarrillo.herokuapp.com')
  Net::HTTP.get(uri)
  puts "finished call page task"
end
