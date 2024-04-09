import { db } from "@/db";

export async function userLogin(email: string, password: string) {
  const user = await db.user.findFirst({
    where: {
      email,
      password,
    },
  });

  if (user) {
    return user;
  } else {
    return null
  }
}


interface Case {
    name: string;
    email: string;
    fraudCompany: string;
    comment: string;
}
  
async function generateUniqueCaseID(): Promise<string> {
    const randomString = Math.random().toString(36).substr(2, 6).toUpperCase(); // Changed length to 6 and converted to uppercase
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Adjusted the range
    const caseID = `${randomString}${randomNumber}`;
  
    const existingCase = await db.case.findFirst({
      where: { caseID },
    });
  
    if (existingCase) {
      return generateUniqueCaseID();
    }
  
    return caseID;
  }
  
  export async function createCase(newCase: Case): Promise<void> {
    const caseID = await generateUniqueCaseID();
  
    await db.case.create({
      data: {
        ...newCase,
        caseID,
      },
    });
  }

export async function getAllCases() {
    const cases = await db.case.findMany()
    return cases
}

export async function deleteCase(id: number){
    await db.case.delete({
        where: { id }
    })
}