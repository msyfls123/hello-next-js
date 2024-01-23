import AppRouteRouteModule from 'next/dist/server/future/route-modules/app-route/module';
import { NextResponse } from 'next/server';

export const GET: AppRouteRouteModule['handle'] = async function GET(request, { params }) {
  return NextResponse.json({
    params,
    hello: 123,
  })
}

export const POST: AppRouteRouteModule['handle'] = async function POST(request) {
  const payload = await request.json();
  return NextResponse.json({
    payload,
    msg: 'I got your message!'
  }, { status: 200 })
}
