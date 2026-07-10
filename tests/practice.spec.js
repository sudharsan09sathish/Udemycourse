const{expect,test} = require('@playwright/test')

test('Practice Login',async({page})=>{
   
    const username = page.getByRole('radio');
    const typeselect = page.getByRole('textbox',{name: 'Type to Select Countries'});
    const drpdown = page.getByRole('combobox',{name :""})

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.pause();
  await username.nth(1).click();
  await typeselect.pressSequentially("Sud",{timeout : 100});
  await drpdown.selectOption('Option3');



})
