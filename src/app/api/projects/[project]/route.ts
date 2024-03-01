import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';

export async function GET(request:any) {
  const { searchParams } = new URL(request.url)
  const pathname = searchParams.get('url')
  const filePath = path.join(process.cwd(), `public/projects/${URL}`, 'project-list.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  try {
    const data = JSON.parse(fileContent);
    var chosenProject = ""
    for(var x = 0; x < data.length; x++){
      if(pathname == data[x].name){
        chosenProject = data[x]
      }
    }
    return NextResponse.json(chosenProject);
  } catch (error) {
    console.error('Error reading JSON:', error);
    return NextResponse.error();
  }
}