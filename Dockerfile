# Use the official MySQL image as the base image
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_DATABASE=blog_michi
ENV MYSQL_ROOT_PASSWORD=root
# Optionally, define the default user and password (if needed)
ENV MYSQL_USER=michimejia
ENV MYSQL_PASSWORD=password

# Add your schema SQL script to the docker-entrypoint-initdb.d directory
COPY schema.sql /docker-entrypoint-initdb.d/

# Expose port 3306 to enable communication to/from the server
EXPOSE 3306
