FROM cr.loongnix.cn/openanolis/anolisos:8.9

# install cgo-related dependencies
RUN set -eux; \
        yum update -y ; \
        yum install -y \
                gcc-c++ \
                gcc \
                glibc-devel \
                make \
                pkgconfig \
		wget \
        ; 

ENV PATH /usr/local/go/bin:$PATH
ENV GOLANGVERSION 1.24.3

RUN set -eux; \
	url='http://ftp.loongnix.cn/toolchain/golang/go-1.24/abi1.0/go1.24.3.linux-loong64.tar.gz'; \
	sha256='0a1756373a86a84f420cf74045665ed83f7165fdc0b36c87f63c4b29779ac840'; \
	wget -O go.tgz "$url" --progress=dot:giga; \
	echo "$sha256 *go.tgz" | sha256sum -c -; \
	tar -C /usr/local -xzf go.tgz; \
	rm go.tgz; \
	go version

ENV GOPATH /go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
WORKDIR $GOPATH
