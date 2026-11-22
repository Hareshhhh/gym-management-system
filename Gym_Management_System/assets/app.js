
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
function getData(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch{return fallback}}
function setData(key,val){localStorage.setItem(key,JSON.stringify(val))}
function seed(){
 if(!localStorage.getItem('gymMembers')) setData('gymMembers',[
 {id:'GM-1001',name:'Aarav Shah',plan:'Premium',status:'Active',joined:'2026-10-12'},
 {id:'GM-1002',name:'Diya Patel',plan:'Basic',status:'Active',joined:'2026-10-18'},
 {id:'GM-1003',name:'Rohan Mehta',plan:'Standard',status:'Pending',joined:'2026-11-02'},
 {id:'GM-1004',name:'Mira Joshi',plan:'Premium',status:'Active',joined:'2026-11-08'}]);
 if(!localStorage.getItem('gymEnquiries')) setData('gymEnquiries',[
 {name:'Kavya Desai',email:'kavya@example.com',message:'Interested in personal training',status:'New'}]);
}
seed();
function notify(msg){let n=$('#notice');if(n){n.textContent=msg;n.style.display='block';setTimeout(()=>n.style.display='none',2800)}}
function renderMembers(){
 let body=$('#memberRows');if(!body)return;
 let rows=getData('gymMembers',[]);body.innerHTML=rows.map(m=>`<tr><td>${m.id}</td><td>${m.name}</td><td>${m.plan}</td><td><span class="pill ${m.status==='Pending'?'pending':''}">${m.status}</span></td><td>${m.joined}</td><td><button class="btn small secondary" data-remove="${m.id}">Remove</button></td></tr>`).join('');
 $$('[data-remove]').forEach(b=>b.onclick=()=>{setData('gymMembers',getData('gymMembers',[]).filter(m=>m.id!==b.dataset.remove));renderMembers();notify('Member removed from this demo.')});
 let count=$('#memberCount');if(count)count.textContent=rows.length;
}
function renderEnquiries(){let body=$('#enquiryRows');if(!body)return;let rows=getData('gymEnquiries',[]);body.innerHTML=rows.map((e,i)=>`<tr><td>${e.name}</td><td>${e.email}</td><td>${e.message}</td><td><span class="pill pending">${e.status}</span></td><td><button class="btn small secondary" data-done="${i}">Resolve</button></td></tr>`).join('');$$('[data-done]').forEach(b=>b.onclick=()=>{let r=getData('gymEnquiries',[]);r.splice(+b.dataset.done,1);setData('gymEnquiries',r);renderEnquiries();notify('Enquiry marked resolved.')})}
function filterTable(){let inp=$('#tableSearch');if(!inp)return;inp.addEventListener('input',()=>$$('tbody tr').forEach(r=>r.style.display=r.innerText.toLowerCase().includes(inp.value.toLowerCase())?'':'none'))}
document.addEventListener('DOMContentLoaded',()=>{
 renderMembers();renderEnquiries();filterTable();
 let form=$('#contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();let data=Object.fromEntries(new FormData(form));let rows=getData('gymEnquiries',[]);rows.push({...data,status:'New'});setData('gymEnquiries',rows);form.reset();notify('Thanks! Your enquiry has been saved in this browser demo.')});
 let reg=$('#registerForm');if(reg)reg.addEventListener('submit',e=>{e.preventDefault();let d=Object.fromEntries(new FormData(reg));let rows=getData('gymMembers',[]);rows.push({id:'GM-'+(1001+rows.length),name:d.name,plan:d.plan,status:'Pending',joined:new Date().toISOString().slice(0,10)});setData('gymMembers',rows);reg.reset();notify('Registration saved. Admin can review it in the dashboard.')});
 let login=$('#loginForm');if(login)login.addEventListener('submit',e=>{e.preventDefault();notify('Demo login only. Connect a backend for secure authentication.')});
});
