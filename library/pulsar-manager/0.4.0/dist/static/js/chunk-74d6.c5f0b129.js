(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-74d6"],{"2Ayc":function(e,t,i){"use strict";i.d(t,"e",function(){return r}),i.d(t,"d",function(){return o}),i.d(t,"h",function(){return l}),i.d(t,"i",function(){return c}),i.d(t,"b",function(){return u}),i.d(t,"g",function(){return p}),i.d(t,"f",function(){return m}),i.d(t,"a",function(){return d}),i.d(t,"j",function(){return h}),i.d(t,"c",function(){return y});var a=i("t3Un"),s="/admin/v2",n="/pulsar-manager/admin/v2";function r(e){return Object(a.a)({url:n+"/clusters",method:"get",params:{query:e}})}function o(e){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e,method:"get"})}function l(e,t){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e,method:"put",data:t})}function c(e,t){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e,method:"post",data:t})}function u(e){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e,method:"delete"})}function p(e){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e+"/failureDomains",method:"get"})}function m(e,t){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e+"/failureDomains/"+t,method:"get"})}function d(e,t,i){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:s+"/clusters/"+e+"/failureDomains/"+t,method:"post",data:i})}function h(e,t,i){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:s+"/clusters/"+e+"/failureDomains/"+t,method:"post",data:i})}function y(e,t){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:s+"/clusters/"+e+"/failureDomains/"+t,method:"post"})}},QTWJ:function(e,t,i){"use strict";i.d(t,"b",function(){return n}),i.d(t,"c",function(){return r}),i.d(t,"a",function(){return o});var a=i("t3Un"),s="/admin/v2";function n(e){return Object(a.a)({headers:{"x-pulsar-cluster":e},url:s+"/clusters/"+e+"/namespaceIsolationPolicies",method:"get"})}function r(e,t,i){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:s+"/clusters/"+e+"/namespaceIsolationPolicies/"+t,method:"post",data:i})}function o(e,t){return Object(a.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:s+"/clusters/"+e+"/namespaceIsolationPolicies/"+t,method:"delete"})}},Y5bG:function(e,t,i){"use strict";i.d(t,"a",function(){return s}),Math.easeInOutQuad=function(e,t,i,a){return(e/=a/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function s(e,t,i){var s=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,n=e-s,r=0;t=void 0===t?500:t;!function e(){r+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(r,s,n,t)),r<t?a(e):i&&"function"==typeof i&&i()}()}},bhGh:function(e,t,i){},"hM+v":function(e,t,i){"use strict";i.r(t);var a=i("P2sY"),s=i.n(a),n=i("2Ayc"),r=i("QTWJ"),o=i("Mz3J"),l=i("Grqa"),c={cluster:"",policy:""},u={name:"NamespaceIsolationPolicy",components:{Pagination:o.a,MdInput:l.a},data:function(){return{postForm:s()({},c),clustersListOptions:[],namespaceContent:this.$i18n.t("ip.namespaceDesc"),brokerContent:this.$i18n.t("ip.primaryBrokerDesc"),secondaryBrokersContent:this.$i18n.t("ip.secondaryBrokerDesc"),policyTypeContent:this.$i18n.t("ip.policyTypeDesc"),brokerUsageThresholdContent:this.$i18n.t("ip.brokerUsageThresholdDesc"),minimalAvailableBrokerContent:this.$i18n.t("ip.minimalAvailableBrokerDesc"),form:{namespaces:"",broker:"",brokerUsageThreshold:"",minimalAvailableBroker:""},autoFailoverPolicy:"min_available",autoFailoverPolicyOptions:[],rules:{},policiesListOptions:[],primaryDynamicTags:[],inputVisiblePrimary:!1,inputValuePrimary:"",namespaceDynamicTags:[],inputValueNamespace:"",inputVisibleNamespace:!1,secondaryDynamicTags:[],inputVisibleSecondary:!1,inputValueSecondary:"",created:!1,policyName:"",textMap:{delete:this.$i18n.t("ip.deletePolicyDialogCaption")},dialogStatus:"",dialogFormVisible:!1}},created:function(){this.postForm.cluster=this.$route.params&&this.$route.params.cluster,this.getClusterList(),this.$route.query&&this.$route.query.created?this.created=!0:(this.postForm.policy=this.$route.params&&this.$route.params.namespaceIsolation,this.getPoliciesList())},methods:{getClusterList:function(){var e=this;Object(n.e)().then(function(t){if(t.data)for(var i=0;i<t.data.data.length;i++)e.clustersListOptions.push(t.data.data[i].cluster)})},getPoliciesList:function(){var e=this;Object(r.b)(this.postForm.cluster).then(function(t){if(t.data)for(var i in t.data)e.policiesListOptions.push(i),i===e.postForm.policy&&(e.namespaceDynamicTags=t.data[i].namespaces,e.primaryDynamicTags=t.data[i].primary,e.secondaryDynamicTags=t.data[i].secondary,e.autoFailoverPolicyOptions.push({value:t.data[i].auto_failover_policy.policy_type,label:t.data[i].auto_failover_policy.policy_type}),e.form.minimalAvailableBroker=t.data[i].auto_failover_policy.parameters.min_limit,e.form.brokerUsageThreshold=t.data[i].auto_failover_policy.parameters.usage_threshold)})},handleIsolationPolicy:function(){var e=this,t=this.postForm.policy;if(this.created){if(this.policyName.length<=0)return void this.$notify({title:"error",message:this.$i18n.t("ip.policyNameCannotBeEmpty"),type:"error",duration:3e3});if(this.namespaceDynamicTags.length<=0)return void this.$notify({title:"error",message:this.$i18n.t("ip.regexCannotBeEmpty"),type:"error",duration:3e3});if(this.primaryDynamicTags.length<=0)return void this.$notify({title:"error",message:this.$i18n.t("ip.primaryBrokerRegexCannotBeEmpty"),type:"error",duration:3e3});if(this.secondaryDynamicTags.length<=0)return void this.$notify({title:"error",message:this.$i18n.t("ip.secondaryBrokerRegexCannotBeEmpty"),type:"error",duration:3e3});if(this.form.minimalAvailableBroker<=0)return void this.$notify({title:"error",message:this.$i18n.t("ip.numLimitShouldGreaterThan0"),type:"error",duration:3e3});if(this.form.brokerUsageThreshold<=0)return void this.$notify({title:"error",message:this.$i18n.t("ip.usageThresholdShouldGreaterThan0"),type:"error",duration:3e3});t=this.policyName}var i={namespaces:this.namespaceDynamicTags,primary:this.primaryDynamicTags,secondary:this.secondaryDynamicTags,auto_failover_policy:{policy_type:0,parameters:{min_limit:this.form.minimalAvailableBroker,usage_threshold:this.form.brokerUsageThreshold}}};Object(r.c)(this.postForm.cluster,t,i).then(function(t){e.$notify({title:"success",message:e.$i18n.t("ip.updatePolicySuccessNotification"),type:"success",duration:3e3}),e.created&&e.$router.push({path:"/management/clusters/"+e.postForm.cluster+"/cluster?tab=isolationPolicies"})})},handleClosePrimary:function(e){this.primaryDynamicTags.splice(this.primaryDynamicTags.indexOf(e),1)},showInputPrimary:function(){var e=this;this.inputVisiblePrimary=!0,this.$nextTick(function(t){e.$refs.saveTagInputPrimary.$refs.input.focus()})},handleInputConfirmPrimary:function(){var e=this.inputValuePrimary;this.primaryDynamicTags.indexOf(e)>=0?this.$notify({title:"error",message:this.$i18n.t("ip.primaryBrokerRegexAlreadyExists"),type:"error",duration:3e3}):(e&&this.primaryDynamicTags.push(e),this.inputVisiblePrimary=!1,this.inputValuePrimary="")},handleCloseNamespace:function(e){this.namespaceDynamicTags.splice(this.namespaceDynamicTags.indexOf(e),1)},showInputNamespace:function(){var e=this;this.inputVisibleNamespace=!0,this.$nextTick(function(t){e.$refs.saveTagInputNamespace.$refs.input.focus()})},handleInputConfirmNamespace:function(){var e=this.inputValueNamespace;this.namespaceDynamicTags.indexOf(e)>=0?this.$notify({title:"error",message:this.$i18n.t("ip.nsRegexAlreadyExists"),type:"error",duration:3e3}):(e&&this.namespaceDynamicTags.push(e),this.inputVisibleNamespace=!1,this.inputValueNamespace="")},handleCloseSecondary:function(e){this.secondaryDynamicTags.splice(this.secondaryDynamicTags.indexOf(e),1)},showInputSecondary:function(){var e=this;this.inputVisibleSecondary=!0,this.$nextTick(function(t){e.$refs.saveTagInputSecondary.$refs.input.focus()})},handleInputConfirmSecondary:function(){var e=this.inputValueSecondary;this.secondaryDynamicTags.indexOf(e)>=0?this.$notify({title:"error",message:this.$i18n.t("ip.secondaryBrokerRegexAlreadyExists"),type:"error",duration:3e3}):(e&&this.secondaryDynamicTags.push(e),this.inputVisibleSecondary=!1,this.inputValueSecondary="")},handleDelete:function(){this.dialogFormVisible=!0,this.dialogStatus="delete"},deletePolicy:function(){var e=this;Object(r.a)(this.postForm.cluster,this.postForm.policy).then(function(t){e.$notify({title:"success",message:e.$i18n.t("ip.deletePolicySuccessNotification"),type:"success",duration:3e3}),e.$router.push({path:"/management/clusters/"+e.postForm.cluster+"/cluster?tab=isolationPolicies"})})}}},p=(i("iVPs"),i("KHd+")),m=Object(p.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("h2",[e._v(e._s(e.$t("ip.heading")))]),e._v(" "),i("div",{staticClass:"createPost-container"},[i("el-form",{staticClass:"form-container",attrs:{inline:!0,model:e.postForm,"label-position":"top"}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:e.$t("common.clusterLabel")}},[i("el-select",{attrs:{placeholder:e.$t("cluster.selectCluster")},on:{change:function(t){return e.getClusterList(e.postForm.cluster)}},model:{value:e.postForm.cluster,callback:function(t){e.$set(e.postForm,"cluster",t)},expression:"postForm.cluster"}},e._l(e.clustersListOptions,function(e,t){return i("el-option",{key:e+t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),!1===e.created?i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:e.$t("ip.label")}},[i("el-select",{attrs:{placeholder:e.$t("ip.selectIp")},on:{change:function(t){e.postForm.cluster}},model:{value:e.postForm.policy,callback:function(t){e.$set(e.postForm,"policy",t)},expression:"postForm.policy"}},e._l(e.policiesListOptions,function(e,t){return i("el-option",{key:e+t,attrs:{label:e,value:e}})}),1)],1):e._e(),e._v(" "),!0===e.created?i("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:e.$t("ip.label")}},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:e.$t("ip.newIpName"),clearable:""},model:{value:e.policyName,callback:function(t){e.policyName=t},expression:"policyName"}})],1):e._e()],1)],1),e._v(" "),i("el-row",[i("h3",[e._v(e._s(e.$t("common.namespacesLabel")))]),e._v(" "),i("hr",{staticClass:"split-line"}),e._v(" "),i("span",[e._v(e._s(e.$t("ip.selectNsLabel"))+"\n      "),i("el-tooltip",{staticClass:"item",attrs:{content:e.namespaceContent,effect:"dark",placement:"top"}},[i("i",{staticClass:"el-icon-info"})])],1),e._v(" "),i("br"),e._v(" "),e._l(e.namespaceDynamicTags,function(t,a){return i("el-tag",{key:"namespace-"+a,attrs:{"disable-transitions":!1,closable:""},on:{close:function(i){return e.handleCloseNamespace(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),e._v(" "),e.inputVisibleNamespace?i("el-input",{ref:"saveTagInputNamespace",staticClass:"input-new-tag",attrs:{size:"small"},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirmNamespace(t)}},model:{value:e.inputValueNamespace,callback:function(t){e.inputValueNamespace=t},expression:"inputValueNamespace"}}):i("el-button",{staticClass:"button-new-tag",attrs:{icon:"el-icon-plus",size:"small"},on:{click:e.showInputNamespace}},[e._v("\n      "+e._s(e.$t("common.regex"))+"\n    ")]),e._v(" "),i("h3",[e._v(e._s(e.$t("ip.pbHeading")))]),e._v(" "),i("hr",{staticClass:"split-line"}),e._v(" "),i("span",[e._v(e._s(e.$t("ip.selectPbLabel"))+"\n      "),i("el-tooltip",{staticClass:"item",attrs:{content:e.brokerContent,effect:"dark",placement:"top"}},[i("i",{staticClass:"el-icon-info"})])],1),e._v(" "),i("br"),e._v(" "),e._l(e.primaryDynamicTags,function(t,a){return i("el-tag",{key:"primary-"+a,attrs:{"disable-transitions":!1,closable:""},on:{close:function(i){return e.handleClosePrimary(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),e._v(" "),e.inputVisiblePrimary?i("el-input",{ref:"saveTagInputPrimary",staticClass:"input-new-tag",attrs:{size:"small"},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirmPrimary(t)}},model:{value:e.inputValuePrimary,callback:function(t){e.inputValuePrimary=t},expression:"inputValuePrimary"}}):i("el-button",{staticClass:"button-new-tag",attrs:{icon:"el-icon-plus",size:"small"},on:{click:e.showInputPrimary}},[e._v("\n      "+e._s(e.$t("common.regex"))+"\n    ")]),e._v(" "),i("h3",[e._v(e._s(e.$t("ip.sbHeading")))]),e._v(" "),i("hr",{staticClass:"split-line"}),e._v(" "),i("span",[e._v(e._s(e.$t("ip.selectSbLabel"))+"\n      "),i("el-tooltip",{staticClass:"item",attrs:{content:e.secondaryBrokersContent,effect:"dark",placement:"top"}},[i("i",{staticClass:"el-icon-info"})])],1),e._v(" "),i("br"),e._v(" "),e._l(e.secondaryDynamicTags,function(t,a){return i("el-tag",{key:"secondary-"+a,attrs:{"disable-transitions":!1,closable:""},on:{close:function(i){return e.handleCloseSecondary(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),e._v(" "),e.inputVisibleSecondary?i("el-input",{ref:"saveTagInputSecondary",staticClass:"input-new-tag",attrs:{size:"small"},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirmSecondary(t)}},model:{value:e.inputValueSecondary,callback:function(t){e.inputValueSecondary=t},expression:"inputValueSecondary"}}):i("el-button",{staticClass:"button-new-tag",attrs:{icon:"el-icon-plus",size:"small"},on:{click:e.showInputSecondary}},[e._v("\n      "+e._s(e.$t("common.regex"))+"\n    ")]),e._v(" "),i("h3",[e._v(e._s(e.$t("ip.afpHeading")))]),e._v(" "),i("hr",{staticClass:"split-line"}),e._v(" "),i("span",[e._v(e._s(e.$t("ip.ptHeading"))+"\n      "),i("el-tooltip",{staticClass:"item",attrs:{content:e.policyTypeContent,effect:"dark",placement:"top"}},[i("i",{staticClass:"el-icon-info"})])],1),e._v(" "),i("br"),e._v(" "),i("el-select",{staticStyle:{"margin-top":"20px",width:"300px"},attrs:{placeholder:e.$t("ip.selectAfpPh")},model:{value:e.autoFailoverPolicy,callback:function(t){e.autoFailoverPolicy=t},expression:"autoFailoverPolicy"}},e._l(e.autoFailoverPolicyOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),i("el-form",{attrs:{inline:!0,model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{prop:"ensembleSize"}},[i("span",[e._v(e._s(e.$t("ip.brokerUsageThresholdLabel"))+" (%)")]),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{content:e.brokerUsageThresholdContent,effect:"dark",placement:"top"}},[i("i",{staticClass:"el-icon-info"})]),e._v(" "),i("md-input",{staticClass:"md-input-style",attrs:{placeholder:e.$t("ip.brokerUsageThresholdPh"),name:"brokerUsageThreshold"},model:{value:e.form.brokerUsageThreshold,callback:function(t){e.$set(e.form,"brokerUsageThreshold",t)},expression:"form.brokerUsageThreshold"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"writeQuorumSize"}},[i("span",[e._v(e._s(e.$t("ip.minimalAvailableBrokerLabel")))]),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{content:e.minimalAvailableBrokerContent,effect:"dark",placement:"top"}},[i("i",{staticClass:"el-icon-info"})]),e._v(" "),i("md-input",{staticClass:"md-input-style",attrs:{placeholder:e.$t("ip.minimalAvailableBrokerPh"),name:"minimalAvailableBroker"},model:{value:e.form.minimalAvailableBroker,callback:function(t){e.$set(e.form,"minimalAvailableBroker",t)},expression:"form.minimalAvailableBroker"}})],1)],1),e._v(" "),!0===e.created?i("div",[i("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.handleIsolationPolicy}},[e._v("Create Policy")])],1):e._e(),e._v(" "),!1===e.created?i("div",[i("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.handleIsolationPolicy}},[e._v("Update Policy")])],1):e._e()],2),e._v(" "),!1===e.created?i("div",[i("h4",{staticStyle:{color:"#E57470"}},[e._v(e._s(e.$t("common.dangerZone")))]),e._v(" "),i("hr",{staticClass:"danger-line"}),e._v(" "),i("el-button",{staticClass:"button",attrs:{type:"danger"},on:{click:e.handleDelete}},[e._v("Delete Policy")])],1):e._e(),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogFormVisible,title:e.textMap[e.dialogStatus],width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{attrs:{"label-position":"top"}},["delete"===e.dialogStatus?i("div",[i("el-form-item",[i("h4",[e._v(e._s(e.$t("ip.deletePolicyMessage")))])]),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deletePolicy()}}},[e._v(e._s(e.$t("table.confirm")))]),e._v(" "),i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))])],1)],1):e._e()])],1)],1)},[],!1,null,null,null);m.options.__file="namespaceIsolationPolicy.vue";t.default=m.exports},iVPs:function(e,t,i){"use strict";var a=i("bhGh");i.n(a).a}}]);