import {PrismaClient,Role,Sector} from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma=new PrismaClient()
async function main(){
 const org=await prisma.organization.upsert({where:{id:'demo-org'},update:{name:'SIMS Demo Organization'},create:{id:'demo-org',name:'SIMS Demo Organization',currency:'SDG',timezone:'Africa/Khartoum'}})
 const pass=await bcrypt.hash('ChangeMe123!',12)
 const users=[
  ['admin@sims.local','مدير النظام',Role.admin,Sector.pharmacy],
  ['warehouse@sims.local','مدير المخزن',Role.warehouse_manager,Sector.factory],
  ['cashier@sims.local','الكاشير',Role.cashier,Sector.pharmacy],
  ['sales@sims.local','مدير المبيعات',Role.sales_manager,Sector.pharmacy]
 ] as const
 for(const [email,name,role,sector] of users) await prisma.user.upsert({where:{email},update:{passwordHash:pass,active:true,role,sector,name},create:{email,name,passwordHash:pass,role,sector,orgId:org.id}})
 const data=[
  {sku:'SIMS-000001',barcode:'6223001234567',name:'بنادول اكسترا',sector:Sector.pharmacy,qty:45,minQty:10,reorderQty:20,buyPrice:1200,sellPrice:1800,unit:'علبة'},
  {sku:'SIMS-000002',barcode:'6223007654321',name:'اموكلان 1g',sector:Sector.pharmacy,qty:8,minQty:15,reorderQty:25,buyPrice:3500,sellPrice:5000,unit:'علبة'},
  {sku:'SIMS-000003',barcode:'1234567890128',name:'خام بلاستيك',sector:Sector.factory,qty:120,minQty:20,reorderQty:30,buyPrice:800,sellPrice:1100,unit:'كجم'}
 ]
 for(const p of data) await prisma.product.upsert({where:{orgId_sku:{orgId:org.id,sku:p.sku}},update:{},create:{...p,orgId:org.id}})
 console.log('Seed complete. Default password: ChangeMe123!')
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
