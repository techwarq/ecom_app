// src/app/api/configurations/route.ts

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Fetch the configuration data from your database
    const configurations = await prisma.configuration.findMany()
    return NextResponse.json(configurations)
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
