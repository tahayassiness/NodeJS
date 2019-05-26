const fs = require('fs');


const GetCurrentDirectory= ()=>{
  console.log(`Current directory: ${process.cwd()}`);
} 

const CreateDirectory= async (NameFolder) =>{
  try {
    await fs.mkdirSync(NameFolder);
    console.log('-----Directory created--------');

  } catch (err) {
    if (err.code == 'EEXIST') {
    const path=process.cwd();
    const listFolder = fs.readdirSync(path);
    const NewNamefolder=`${NameFolder.substring(0,NameFolder.indexOf('-'))}-${listFolder.length-2}`;
    console.log(NewNamefolder);
    await fs.mkdirSync(NewNamefolder);
    console.log(`----Directory created with New name :${NewNamefolder}`);
    }else{
      console.log(err);
    }
  }
}


 const main= async () => {
  try {
    await GetCurrentDirectory();
    await CreateDirectory('monDossier-0')
  } catch (err) {
    console.error(err)
  }
}


main()