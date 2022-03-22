.PHONY: loadWorkbox
loadWorkbox:
	pnpm add -g workbox-cli
	workbox copyLibraries .

.PHONY: frp
frp:
	curl -s https://api.github.com/repos/fatedier/frp/releases/latest | grep browser_download_url | grep linux_amd64 | cut -d '"' -f 4 | xargs -i wget https://gh.ddlc.top/{}
	tar xvzf frp_*_linux_amd64.tar.gz
	mv frp_*_linux_amd64/frps releases/frp/linux_amd64/
	mv frp_*_linux_amd64/frpc releases/frp/linux_amd64/
	upx -9 releases/frp/linux_amd64/frpc
	upx -9 releases/frp/linux_amd64/frps
	rm -rf frp_*
