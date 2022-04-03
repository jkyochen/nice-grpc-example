build:
	mkdir -p target
	./node_modules/.bin/grpc_tools_node_protoc \
	--plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
	--ts_proto_out=./target \
	--ts_proto_opt=outputServices=generic-definitions,useExactTypes=false \
	--proto_path=./protos \
	./protos/*.proto
