Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  #config.vm.network "private_network", ip: "10.0.2.2"
  config.vm.network :forwarded_port, guest: 8080, host: 7990

  config.vm.provision "shell", inline: <<-SHELL 
  	sudo yum -y install java-1.8.0-openjdk*
  SHELL
end
