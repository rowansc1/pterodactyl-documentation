(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{382:function(t,a,s){"use strict";s.r(a);var e=s(48),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-20-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-20-04"}},[t._v("#")]),t._v(" Ubuntu 20.04")]),t._v(" "),s("p",[t._v("In this guide we will install Pterodactyl v1.X — including all of it's dependencies — and configure our webserver to serve it using SSL.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-requirements"}},[t._v("Install Requirements")]),s("ul",[s("li",[s("a",{attrs:{href:"#mariadb"}},[t._v("MariaDB")])]),s("li",[s("a",{attrs:{href:"#php-8-0"}},[t._v("PHP 8.0")])]),s("li",[s("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),s("li",[s("a",{attrs:{href:"#redis"}},[t._v("Redis")])]),s("li",[s("a",{attrs:{href:"#additional-utilities"}},[t._v("Additional Utilities")])])])]),s("li",[s("a",{attrs:{href:"#server-configuration"}},[t._v("Server Configuration")]),s("ul",[s("li",[s("a",{attrs:{href:"#configuring-mariadb"}},[t._v("Configuring MariaDB")])]),s("li",[s("a",{attrs:{href:"#setup-php"}},[t._v("Setup PHP")])]),s("li",[s("a",{attrs:{href:"#nginx-configuration"}},[t._v("Nginx Configuration")])]),s("li",[s("a",{attrs:{href:"#redis-setup"}},[t._v("Redis Setup")])])])]),s("li",[s("a",{attrs:{href:"#installing-the-panel"}},[t._v("Installing the Panel")])])])]),s("p"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This guide is based off the "),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("official installation documentation")]),t._v(" but is tailored specifically for Ubuntu 20.04.")],1)]),t._v(" "),s("h2",{attrs:{id:"install-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements"}},[t._v("#")]),t._v(" Install Requirements")]),t._v(" "),s("p",[t._v("We will first begin by installing all of Pterodactyl's "),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#dependencies"}},[t._v("required")]),t._v(" dependencies.")],1),t._v(" "),s("h3",{attrs:{id:"mariadb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[t._v("#")]),t._v(" MariaDB")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Get apt updates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install MariaDB")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y mariadb-common mariadb-server mariadb-client\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Start MariaDB")]),t._v("\nsystemctl start mariadb\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mariadb\n")])])]),s("h3",{attrs:{id:"php-8-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-8-0"}},[t._v("#")]),t._v(" PHP 8.0")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Get apt updates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install PHP 8.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" php8.0 php8.0-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nginx\n")])])]),s("h3",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y redis-server\n\nsystemctl start redis-server\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" redis-server\n")])])]),s("h3",{attrs:{id:"additional-utilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-utilities"}},[t._v("#")]),t._v(" Additional Utilities")]),t._v(" "),s("h4",{attrs:{id:"certbot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#certbot"}},[t._v("#")]),t._v(" Certbot")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y certbot\n")])])]),s("h4",{attrs:{id:"composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[t._v("#")]),t._v(" Composer")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://getcomposer.org/installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" php -- --install-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin --filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("composer\n")])])]),s("h2",{attrs:{id:"server-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[t._v("#")]),t._v(" Server Configuration")]),t._v(" "),s("p",[t._v("This following section covers the configuration of parts of the server to run the panel.")]),t._v(" "),s("h3",{attrs:{id:"configuring-mariadb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-mariadb"}},[t._v("#")]),t._v(" Configuring MariaDB")]),t._v(" "),s("p",[t._v("The fastest way to set up MariaDB is to use the "),s("code",[t._v("mysql_secure_installation")]),t._v(" command and follow prompts")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mysql_secure_installation\n")])])]),s("p",[t._v("The following are safe defaults.")]),t._v(" "),s("p",[t._v("Change to your own secure password"),s("br"),t._v(" "),s("code",[t._v("Set root password? [Y/n] Y")])]),t._v(" "),s("p",[t._v("Get rid of users that could access the db by default"),s("br"),t._v(" "),s("code",[t._v("Remove anonymous users? [Y/n] Y")])]),t._v(" "),s("p",[t._v("Keep root off the external interfaces"),s("br"),t._v(" "),s("code",[t._v("Disallow root login remotely? [Y/n] Y")])]),t._v(" "),s("p",[t._v("Extra databases that aren't needed"),s("br"),t._v(" "),s("code",[t._v("Remove test database and access to it? [Y/n] Y")])]),t._v(" "),s("p",[t._v("Clears and sets all the changes made"),s("br"),t._v(" "),s("code",[t._v("Reload privilege tables now? [Y/n] Y")])]),t._v(" "),s("p",[t._v("All done! If you've completed all of the above steps, your MariaDB installation should now be secure.")]),t._v(" "),s("h4",{attrs:{id:"adding-mariadb-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-mariadb-user"}},[t._v("#")]),t._v(" Adding MariaDB user")]),t._v(" "),s("p",[t._v("To add your first user to the database, see our tutorial on "),s("RouterLink",{attrs:{to:"/tutorials/mysql_setup.html"}},[t._v("setting up MySQL")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"setup-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-php"}},[t._v("#")]),t._v(" Setup PHP")]),t._v(" "),s("p",[t._v("The default php-fpm configuration is fine to use and can be started and then enabled on the system using the\ncommands below.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" php8.0-fpm\nsystemctl start php8.0-fpm\n")])])]),s("h3",{attrs:{id:"nginx-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-configuration"}},[t._v("#")]),t._v(" Nginx Configuration")]),t._v(" "),s("p",[t._v("Follow "),s("RouterLink",{attrs:{to:"/panel/1.0/webserver_configuration.html"}},[t._v("this guide")]),t._v(" to setup Nginx for Pterodactyl, choose whether to use Nginx with or without SSL.")],1),t._v(" "),s("h3",{attrs:{id:"redis-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-setup"}},[t._v("#")]),t._v(" Redis Setup")]),t._v(" "),s("p",[t._v("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into\n"),s("a",{attrs:{href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"}},[t._v("running another Redis instance"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"installing-the-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-panel"}},[t._v("#")]),t._v(" Installing the Panel")]),t._v(" "),s("p",[t._v("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#download-files"}},[t._v("official Panel installation documentation")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);