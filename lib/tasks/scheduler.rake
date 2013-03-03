desc "This task is called by the Heroku cron add-on to keep the website alive"

task :call_page => :environment do
   uri = URI.parse('http://www.josecarrillo.herokuapp.com')
   Net::HTTP.get(uri)
 end
