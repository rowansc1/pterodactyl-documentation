(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{390:function(e,t,a){"use strict";a.r(t);var s=a(48),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-on-debian-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-on-debian-8"}},[e._v("#")]),e._v(" Docker on Debian 8")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#install-docker"}},[e._v("Install Docker")])]),a("li",[a("a",{attrs:{href:"#update-grub-startup"}},[e._v("Update GRUB Startup")])]),a("li",[a("a",{attrs:{href:"#add-backports-repo"}},[e._v("Add Backports Repo")])]),a("li",[a("a",{attrs:{href:"#update-software-setup-docker"}},[e._v("Update Software & Setup Docker")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("There is a potential for broken software after this upgrade as we are moving to a non-stable kernel (in regards\nto mainline Debian). Please take backups and only proceed if you are comfortable with this process.")])]),e._v(" "),a("h2",{attrs:{id:"install-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[e._v("#")]),e._v(" Install Docker")]),e._v(" "),a("p",[e._v("To begin with, we're going to install docker just like we would for any other OS by following Docker's\n"),a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation for Debian"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once you've done that, if you run "),a("code",[e._v("docker info")]),e._v(" you'll notice some missing features at the bottom, something\nlike the output below.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WARNING: No memory limit support\nWARNING: No swap limit support\nWARNING: No kernel memory limit support\nWARNING: No oom kill disable support\nWARNING: No cpu cfs quota support\nWARNING: No cpu cfs period support\n")])])]),a("h2",{attrs:{id:"update-grub-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-grub-startup"}},[e._v("#")]),e._v(" Update GRUB Startup")]),e._v(" "),a("p",[e._v("To fix the memory limit support issues, we just need to add two arguments to our default grub startup. Start by\nopening "),a("code",[e._v("/etc/default/grub")]),e._v(" and adding the following arguments to "),a("code",[e._v("GRUB_CMDLINE_LINUX_DEFAULT")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("swapaccount=1 cgroup_enable=memory\n")])])]),a("p",[e._v("The line should then look like the one below — assuming nothing else was in the quote to begin with.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1 cgroup_enable=memory"\n')])])]),a("p",[e._v("After doing that, run "),a("code",[e._v("sudo update-grub")]),e._v(" to update our grub configuration.")]),e._v(" "),a("h2",{attrs:{id:"add-backports-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-backports-repo"}},[e._v("#")]),e._v(" Add Backports Repo")]),e._v(" "),a("p",[e._v("We then need to enable the "),a("code",[e._v("jessie-backports")]),e._v(" apt repository to install a newer kernel. To do this, run the commands below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" deb http://http.debian.net/debian jessie-backports main "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/apt/sources.list.d/jessie-backports.list\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" deb http://http.debian.net/debian jessie-backports main contrib non-free "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/apt/sources.list.d/jessie-backports.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n")])])]),a("p",[e._v("To find the most recent kernels, run "),a("code",[e._v("apt-cache search linux-image")]),e._v(" which will list all of the ones available. In this\ncase, we'll install the "),a("code",[e._v("4.9.0")]),e._v(" kernel using the command below. Once we've done that, it is time to reboot the server\nto start using this kernel.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -t jessie-backports linux-image-4.9.0-0.bpo.3-amd64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),a("h2",{attrs:{id:"update-software-setup-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-software-setup-docker"}},[e._v("#")]),e._v(" Update Software & Setup Docker")]),e._v(" "),a("p",[e._v("Now that we're on the new kernel you probably need to update some software to take advantage of it. To do this,\nsimply run the command below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" upgrade\n")])])]),a("p",[e._v("Once that is done, we need to make an adjustment to docker to use "),a("code",[e._v("overlay2")]),e._v(" rather than "),a("code",[e._v("aufs")]),e._v(" since "),a("code",[e._v("aufs")]),e._v(" is not\nsupported on this kernel currently. Run the command below to do so.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s,/usr/bin/dockerd,/usr/bin/dockerd --storage-driver=overlay2,g'")]),e._v(" /lib/systemd/system/docker.service\n")])])]),a("p",[e._v("Finally, update "),a("code",[e._v("systemd")]),e._v(" and start docker using the following commands.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" docker start\n")])])]),a("p",[e._v("Docker should now be running and reporting no errors if you run "),a("code",[e._v("docker info")]),e._v("!")])])}),[],!1,null,null,null);t.default=o.exports}}]);