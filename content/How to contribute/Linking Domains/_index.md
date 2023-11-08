+++
title = "Linking Domains"
weight = 100
description = 'How to link domains to an application using DNS records and Nginx Proxy Manager'
+++

### Overview
To link a domain to an application running on the DigitalOcean Droplet, it is best practice to do so using [Nginx Proxy Manager](https://nginxproxymanager.com/).  If the prox7y manager is not already setup on the Droplet, visit the [getting started]() page and follow the instructions there to set it up.

Linking a domain or subdomain to a specific IP address and Port number will require access to the DNS record settings of the domain through whatever provider it was purchased from.  Also, access to the Droplet that is running the application that requires the domain is necessary, along with the ability to edit firewall settings for the given Droplet.  Make sure all of this is available prior to linking the domain.

*Note: Nginx Proxy Manager is already set up on the Cloud-infrastructure Droplet, so there is no need to set it up when linking domains to anything API related.

### Linking a Domain or Subdomain
To link a a domain or a subdomain to the IP address of an application, you first want to create an A record in the DNS settings of your domain on its provider's website.  If you have linked a domain to DigitalOcean already from a different provider, this can be done from within DigitalOcean, under Domains -> yourDomain -> Create new record.

![Alt text](image.png)

To create an A record for the domain, simply enter the hostname (such as example.com or site.example.com if linking a subdomain), enter the IP of the Droplet that the domain will direct traffic to (such as 192.168.xxx.xxx), and the Time-To-Live value (defaults to 3600 seconds).  Then, hit Create Record and the A record will have been created.  This is all that needs to be done for the DNS settings of the domain, so any windows regarding that can now be closed.

### Opening The Port For Nginx Proxy Manager
To access Nginx Proxy Manager on the Droplet's IP address after setup, a custom firewall setting must be configured.  To do this, head over to the Droplet's dashboard, go to the networking tab on the left under the Droplet's IPv4 Address, scroll down to the "Firewalls" section, and click on either "Configure Firewall" or the name of an existing firewall.  This will bring you to the Inbound and Outbound Rules page.  From here, under Inbound Rules, click on the "New rule" dropdown button (under the existing rules).  Select "Custom", and then for the port range enter "81" and hit save.  Now, when you go to "http://'Droplet'sIPAddr':81", you will see the login page for the instance of Nginx Proxy Manager that is running on the Droplet.  Login, and if you do not have an account already created, the login info will be "admin@example.com" with the password "changeme".  Be sure to change the username and password after logging in.

### Creating a Proxy Host
To direct traffic through the domain/subdomain name to the application being hosted on the Droplet, it is necessary to create a new Proxy host in Nginx Proxy Manager for the domain/subdomain.  To do so, after logging into the instance of Nginx Proxy Manager running on the Droplet, click the "Proxy Hosts" button on the left of the dashboard.  From here you will be taken to the Proxy Hosts page.  Go ahead and hit the "Add Proxy Host" button as seen below:

![Alt text](image-1.png)

This will bring up the page below.  Be sure to enter the domain/subdomain that you created an A record for earlier into the "Domain Names" field and hit the Tab key.  Then, specify the IP address of the Droplet to direct the traffic of the link to, and finally specify the port that the application will be running on inside of the Droplet.  Make sure to check each option and hit save:

![Alt text](image-2.png)

### Generating an SSL Certificate For The Domain
After creating a Proxy Host for the domain, a listing similar to the following will appear in the list of Proxy Hosts:

![Alt text](image-3.png)

From here, click the three dots on the right of the listing and select "Edit".  Click on the "SSL" tab in the popup window, and select "Request a new SSL Certificate" and enter your email to generate the certificate by hitting the save button as seen below:

![Alt text](image-4.png)

Once this is done, it will take a moment to generate the certificate, but soon the application will be accessible through the domain name over http and https.  To force the domain to use https and avoid any http requests, go back to the SSL tab as done above and toggle the "Force SSL" slider, then hit save.

### Conclusion
Now, the domain should be securely accessible and linked to the Droplet's IP address and the port that the application is running on on the Droplet.  Make sure to delete the custom firewall configuration for the Droplet, and everything should be good to go!