# This file is generated by the template.

REGISTRY?=cr.loongnix.cn
ORGANIZATION?=kubevirt
REPOSITORY?=virt-operator
TAG?=0.56.0
LATEST?=true

IMAGE=$(REGISTRY)/$(ORGANIZATION)/$(REPOSITORY):$(TAG)
LATEST_IMAGE=$(REGISTRY)/$(ORGANIZATION)/$(REPOSITORY):latest

default: image

download:
	wget -O csv-generator https://github.com/Loongson-Cloud-Community/kubevirt/releases/download/v0.56.0/csv-generator
	wget -O virt-operator https://github.com/Loongson-Cloud-Community/kubevirt/releases/download/v0.56.0/virt-operator-v0.56.0-linux-loong64
	chmod +x csv-generator virt-operator

image: download
	docker build \
		-t $(IMAGE) \
		.

push:
	docker push $(IMAGE)
	#latest image
	@if [ $(LATEST) = "true" ]; \
		then \
		docker tag $(IMAGE) $(LATEST_IMAGE); \
		docker push $(LATEST_IMAGE); \
	fi
