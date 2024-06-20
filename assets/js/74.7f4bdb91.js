(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{420:function(t,e,a){"use strict";a.r(e);var s=a(48),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"additional-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[t._v("#")]),t._v(" Additional Configuration")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#private-registries"}},[t._v("Private Registries")]),a("ul",[a("li",[a("a",{attrs:{href:"#available-keys"}},[t._v("Available Keys")])]),a("li",[a("a",{attrs:{href:"#example-of-usage"}},[t._v("Example of usage")])])])]),a("li",[a("a",{attrs:{href:"#custom-network-interfaces"}},[t._v("Custom Network Interfaces")]),a("ul",[a("li",[a("a",{attrs:{href:"#example-of-usage"}},[t._v("Example of usage")])])])]),a("li",[a("a",{attrs:{href:"#enabling-cloudflare-proxy"}},[t._v("Enabling Cloudflare proxy")])]),a("li",[a("a",{attrs:{href:"#container-pid-limit"}},[t._v("Container PID Limit")]),a("ul",[a("li",[a("a",{attrs:{href:"#example-of-usage"}},[t._v("Example of usage")])])])]),a("li",[a("a",{attrs:{href:"#throttles-limits"}},[t._v("Throttles Limits")]),a("ul",[a("li",[a("a",{attrs:{href:"#example-of-usage"}},[t._v("Example of usage")])])])]),a("li",[a("a",{attrs:{href:"#installer-limits"}},[t._v("Installer Limits")]),a("ul",[a("li",[a("a",{attrs:{href:"#example-of-usage"}},[t._v("Example of usage")])])])]),a("li",[a("a",{attrs:{href:"#other-values"}},[t._v("Other values")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("These are advanced configurations for Wings. You risk breaking Wings and making containers unusable if\nyou misconfigure something. Proceed only if you know what each configuration value does.")])]),t._v(" "),a("p",[t._v("You must apply all changes to your Wings "),a("code",[t._v("config.yml")]),t._v(" file located at "),a("code",[t._v("/etc/pterodactyl")]),t._v(" and restart wings. Verify your config file using "),a("a",{attrs:{href:"http://www.yamllint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yaml Lint"),a("OutboundLink")],1),t._v(" should you receive errors related to YAML parsing.")]),t._v(" "),a("h2",{attrs:{id:"private-registries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-registries"}},[t._v("#")]),t._v(" Private Registries")]),t._v(" "),a("p",[t._v("You can use these settings to authenticate against (private) docker registries when pulling images.")]),t._v(" "),a("h3",{attrs:{id:"available-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-keys"}},[t._v("#")]),t._v(" Available Keys")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting Key")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",[t._v("Registry address")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",[t._v("Registry username")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",[t._v("Registry password")])])])]),t._v(" "),a("h3",{attrs:{id:"example-of-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-usage"}},[t._v("#")]),t._v(" Example of usage")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry.example.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registryusername"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registrypassword"')]),t._v("\n")])])]),a("h2",{attrs:{id:"custom-network-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-network-interfaces"}},[t._v("#")]),t._v(" Custom Network Interfaces")]),t._v(" "),a("p",[t._v("You can change the network interface that Wings uses for all containers by editing the network name; it is by default set to "),a("code",[t._v("pterodactyl_nw")]),t._v(". For example, to enable Docker host mode change the network name to "),a("code",[t._v("host")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Changing network mode to "),a("code",[t._v("host")]),t._v(" grants Pterodactyl direct access to all machine interfaces and Panel users can bind to any IP or Port even if it's not allocated to their container. You will lose all benefits of Docker network isolation. It is not recommended for public installations that are hosting other users' servers.")])]),t._v(" "),a("h3",{attrs:{id:"example-of-usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-usage-2"}},[t._v("#")]),t._v(" Example of usage")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n")])])]),a("p",[t._v("After making changes, the following commands will stop the Wings, remove the Pterodactyl network, and start the Wings again. Run at your own risk.\n"),a("code",[t._v("systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings")])]),t._v(" "),a("h2",{attrs:{id:"enabling-cloudflare-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-cloudflare-proxy"}},[t._v("#")]),t._v(" Enabling Cloudflare proxy")]),t._v(" "),a("p",[t._v("Cloudflare proxying of the Wings isn't beneficial since users will be connecting to the machine directly and bypassing any Cloudflare protection. As such, your Node machine IP will still be exposed.")]),t._v(" "),a("p",[t._v("To enable Cloudflare proxy, you must change the Wings port to one of the Cloudflare HTTPS ports with caching enabled (more info "),a("a",{attrs:{href:"https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v('), such as 8443, because Cloudflare only supports HTTP on port 8080. Select your Node in the Admin Panel, and on the settings tab, change the port. Make sure that you set "Not Behind Proxy" when using Full SSL settings in Cloudflare. Then on Cloudflare dashboard, your FQDN must have an orange cloud enabled beside it.')]),t._v(" "),a("p",[t._v("You are unable to proxy the SFTP port through Cloudflare unless you have their enterprise plan.")]),t._v(" "),a("h2",{attrs:{id:"container-pid-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-pid-limit"}},[t._v("#")]),t._v(" Container PID Limit")]),t._v(" "),a("p",[t._v("You can change the total number of processes that can be active in a container at any given moment by changing the "),a("code",[t._v("container_pid_limit")]),t._v(" value. The default value is "),a("code",[t._v("512")]),t._v(".\nYou can set it to "),a("code",[t._v("0")]),t._v(" to disable the limit completely. However, this is "),a("em",[t._v("not")]),t._v(" recommended as the limit prevents malicious overloading of the node.\nRestart wings and your game server to apply the new limit.")]),t._v(" "),a("h3",{attrs:{id:"example-of-usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-usage-3"}},[t._v("#")]),t._v(" Example of usage")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_pid_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"throttles-limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throttles-limits"}},[t._v("#")]),t._v(" Throttles Limits")]),t._v(" "),a("p",[t._v("You can use these settings to adjust or completely disable throttling.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Setting Key")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("Whether or not the throttler is enabled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lines")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2000")]),t._v(" "),a("td",[t._v("Total lines that can be output in a given line_reset_interval period")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maximum_trigger_count")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",[t._v("Amount of times throttle limit can be triggered before the server will be stopped")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("line_reset_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",[t._v("The amount of time after which the number of lines processed is reset to 0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("decay_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10000")]),t._v(" "),a("td",[t._v("Time in milliseconds that must pass without triggering throttle limit before trigger count is decremented")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("stop_grace_period")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),a("td",[t._v("Time that a server is allowed to be stopping for before it is terminated forcefully if it triggers output throttle")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("write_limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",[t._v("Impose I/O write limit for backups to the disk, 0 = unlimited. Value greater than 0 throttles write speed to the set value in MiB/s")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("download_limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",[t._v("Impose a Network I/O read limit for archives, 0 = unlimited. Value greater than 0 throttles read speed to the set value in MiB/s")])])])]),t._v(" "),a("h3",{attrs:{id:"example-of-usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-usage-4"}},[t._v("#")]),t._v(" Example of usage")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("throttles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maximum_trigger_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("line_reset_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decay_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stop_grace_period")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n")])])]),a("h2",{attrs:{id:"installer-limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installer-limits"}},[t._v("#")]),t._v(" Installer Limits")]),t._v(" "),a("p",[t._v("Defines the limits on the installer containers that prevents a server's installation process from unintentionally consuming more resources than expected. This is used in conjunction with the server's defined limits. Whichever value is higher will take precedence in the install containers.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Setting Key")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("memory")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1024")]),t._v(" "),a("td",[t._v("The maximum amount of memory install container can use unless server memory limit is higher than this value")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cpu")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",[t._v("The maximum amount of cpu install container can use unless server cpu limit is higher than this value")])])])]),t._v(" "),a("h3",{attrs:{id:"example-of-usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-usage-5"}},[t._v("#")]),t._v(" Example of usage")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("installer_limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),a("h2",{attrs:{id:"other-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-values"}},[t._v("#")]),t._v(" Other values")]),t._v(" "),a("p",[t._v("More commonly discussed values. View all Wings config values and explanations in "),a("a",{attrs:{href:"https://github.com/pterodactyl/wings/tree/develop/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("these two files."),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting Key")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("debug")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("Force Wings to run in debug mode")])]),t._v(" "),a("tr",[a("td",[t._v("tmpfs_size")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",[t._v("The size of the /tmp directory in MB when mounted into a container")])]),t._v(" "),a("tr",[a("td",[t._v("websocket_log_count")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("150")]),t._v(" "),a("td",[t._v("The number of lines to display in the console")])]),t._v(" "),a("tr",[a("td",[t._v("detect_clean_exit_as_crash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("Mark server as crashed if it's stopped without user interaction, e.g., not pressing stop button")])]),t._v(" "),a("tr",[a("td",[t._v("(crash detection) timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("60")]),t._v(" "),a("td",[t._v("Timeout between server crashes that will not cause the server to be automatically restarted")])]),t._v(" "),a("tr",[a("td",[t._v("app_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"Pterodactyl"')]),t._v(" "),a("td",[t._v("Changes the name of the daemon, shown in the panel's game console")])]),t._v(" "),a("tr",[a("td",[t._v("check_permissions_on_boot")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("Check all file permissions on each boot. Disable this when you have a very large amount of files and the server startup is hanging on checking permissions")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);