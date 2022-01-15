import{J as D}from"./ActionMessage.f8f1b740.js";import{J as w}from"./ActionSection.65503a2e.js";import{J as I}from"./Button.75db68d3.js";import{J as M}from"./ConfirmationModal.f30fd448.js";import{J as V}from"./DangerButton.91d1b385.js";import{J as N}from"./DialogModal.a01e3655.js";import{J as L}from"./FormSection.b709c4b7.js";import{J as E}from"./Input.81968ebc.js";import{J as U}from"./Checkbox.2a402c75.js";import{J as z}from"./InputError.c5ba6892.js";import{J as Y}from"./Label.fb57189b.js";import{J as q}from"./SecondaryButton.4af0bc0c.js";import{J as G}from"./SectionBorder.684d3d64.js";import{_ as H}from"./plugin-vue_export-helper.5a098b48.js";import{e as r,o as a,k as c,x as s,w as o,g as l,F as f,B as h,y as _,z as k,n as b,i}from"./vendor.07ccac9c.js";import"./SectionTitle.ce2b8b95.js";const K={components:{JetActionMessage:D,JetActionSection:w,JetButton:I,JetConfirmationModal:M,JetDangerButton:V,JetDialogModal:N,JetFormSection:L,JetInput:E,JetCheckbox:U,JetInputError:z,JetLabel:Y,JetSecondaryButton:q,JetSectionBorder:G},props:["tokens","availablePermissions","defaultPermissions"],data(){return{createApiTokenForm:this.$inertia.form({name:"",permissions:this.defaultPermissions}),updateApiTokenForm:this.$inertia.form({permissions:[]}),deleteApiTokenForm:this.$inertia.form(),displayingToken:!1,managingPermissionsFor:null,apiTokenBeingDeleted:null}},methods:{createApiToken(){this.createApiTokenForm.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{this.displayingToken=!0,this.createApiTokenForm.reset()}})},manageApiTokenPermissions(m){this.updateApiTokenForm.permissions=m.abilities,this.managingPermissionsFor=m},updateApiToken(){this.updateApiTokenForm.put(route("api-tokens.update",this.managingPermissionsFor),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.managingPermissionsFor=null})},confirmApiTokenDeletion(m){this.apiTokenBeingDeleted=m},deleteApiToken(){this.deleteApiTokenForm.delete(route("api-tokens.destroy",this.apiTokenBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.apiTokenBeingDeleted=null})}}},O=i(" Create API Token "),Q=i(" API tokens allow third-party services to authenticate with our application on your behalf. "),R={class:"col-span-6 sm:col-span-4"},W={key:0,class:"col-span-6"},X={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},Z={class:"flex items-center"},$={class:"ml-2 text-sm text-gray-600"},ee=i(" Created. "),oe=i(" Create "),te={key:0},se={class:"mt-10 sm:mt-0"},ne=i(" Manage API Tokens "),ie=i(" You may delete any of your existing tokens if they are no longer needed. "),re={class:"space-y-6"},le={class:"flex items-center"},ae={key:0,class:"text-sm text-gray-400"},ce=["onClick"],me=["onClick"],de=i(" API Token "),pe=l("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),ue={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},_e=i(" Close "),ke=i(" API Token Permissions "),ge={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},fe={class:"flex items-center"},he={class:"ml-2 text-sm text-gray-600"},be=i(" Cancel "),Te=i(" Save "),ve=i(" Delete API Token "),ye=i(" Are you sure you would like to delete this API token? "),Ae=i(" Cancel "),je=i(" Delete ");function Fe(m,n,d,xe,e,p){const T=r("jet-label"),j=r("jet-input"),F=r("jet-input-error"),v=r("jet-checkbox"),x=r("jet-action-message"),y=r("jet-button"),C=r("jet-form-section"),P=r("jet-section-border"),J=r("jet-action-section"),g=r("jet-secondary-button"),A=r("jet-dialog-modal"),S=r("jet-danger-button"),B=r("jet-confirmation-modal");return a(),c("div",null,[s(C,{onSubmitted:p.createApiToken},{title:o(()=>[O]),description:o(()=>[Q]),form:o(()=>[l("div",R,[s(T,{for:"name",value:"Name"}),s(j,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.createApiTokenForm.name,"onUpdate:modelValue":n[0]||(n[0]=t=>e.createApiTokenForm.name=t),autofocus:""},null,8,["modelValue"]),s(F,{message:e.createApiTokenForm.errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(a(),c("div",W,[s(T,{for:"permissions",value:"Permissions"}),l("div",X,[(a(!0),c(f,null,h(d.availablePermissions,t=>(a(),c("div",{key:t},[l("label",Z,[s(v,{value:t,checked:e.createApiTokenForm.permissions,"onUpdate:checked":n[1]||(n[1]=u=>e.createApiTokenForm.permissions=u)},null,8,["value","checked"]),l("span",$,_(t),1)])]))),128))])])):k("",!0)]),actions:o(()=>[s(x,{on:e.createApiTokenForm.recentlySuccessful,class:"mr-3"},{default:o(()=>[ee]),_:1},8,["on"]),s(y,{class:b({"opacity-25":e.createApiTokenForm.processing}),disabled:e.createApiTokenForm.processing},{default:o(()=>[oe]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"]),d.tokens.length>0?(a(),c("div",te,[s(P),l("div",se,[s(J,null,{title:o(()=>[ne]),description:o(()=>[ie]),content:o(()=>[l("div",re,[(a(!0),c(f,null,h(d.tokens,t=>(a(),c("div",{class:"flex items-center justify-between",key:t.id},[l("div",null,_(t.name),1),l("div",le,[t.last_used_ago?(a(),c("div",ae," Last used "+_(t.last_used_ago),1)):k("",!0),d.availablePermissions.length>0?(a(),c("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:u=>p.manageApiTokenPermissions(t)}," Permissions ",8,ce)):k("",!0),l("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:u=>p.confirmApiTokenDeletion(t)}," Delete ",8,me)])]))),128))])]),_:1})])])):k("",!0),s(A,{show:e.displayingToken,onClose:n[3]||(n[3]=t=>e.displayingToken=!1)},{title:o(()=>[de]),content:o(()=>[pe,m.$page.props.jetstream.flash.token?(a(),c("div",ue,_(m.$page.props.jetstream.flash.token),1)):k("",!0)]),footer:o(()=>[s(g,{onClick:n[2]||(n[2]=t=>e.displayingToken=!1)},{default:o(()=>[_e]),_:1})]),_:1},8,["show"]),s(A,{show:e.managingPermissionsFor,onClose:n[6]||(n[6]=t=>e.managingPermissionsFor=null)},{title:o(()=>[ke]),content:o(()=>[l("div",ge,[(a(!0),c(f,null,h(d.availablePermissions,t=>(a(),c("div",{key:t},[l("label",fe,[s(v,{value:t,checked:e.updateApiTokenForm.permissions,"onUpdate:checked":n[4]||(n[4]=u=>e.updateApiTokenForm.permissions=u)},null,8,["value","checked"]),l("span",he,_(t),1)])]))),128))])]),footer:o(()=>[s(g,{onClick:n[5]||(n[5]=t=>e.managingPermissionsFor=null)},{default:o(()=>[be]),_:1}),s(y,{class:b(["ml-2",{"opacity-25":e.updateApiTokenForm.processing}]),onClick:p.updateApiToken,disabled:e.updateApiTokenForm.processing},{default:o(()=>[Te]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"]),s(B,{show:e.apiTokenBeingDeleted,onClose:n[8]||(n[8]=t=>e.apiTokenBeingDeleted=null)},{title:o(()=>[ve]),content:o(()=>[ye]),footer:o(()=>[s(g,{onClick:n[7]||(n[7]=t=>e.apiTokenBeingDeleted=null)},{default:o(()=>[Ae]),_:1}),s(S,{class:b(["ml-2",{"opacity-25":e.deleteApiTokenForm.processing}]),onClick:p.deleteApiToken,disabled:e.deleteApiTokenForm.processing},{default:o(()=>[je]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])])}var qe=H(K,[["render",Fe]]);export{qe as default};
