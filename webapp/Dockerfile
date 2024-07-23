FROM nginx:1.15.8

# Copy HTML, CSS, and JS files to the appropriate locations in the Nginx container
COPY html /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js

# Copy Passwords to the Nginx Container
COPY passwords /usr/share/nginx/passwords

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]