import AppRouteRouteModule, { AppRouteHandlerFn } from 'next/dist/server/future/route-modules/app-route/module';
import { NextResponse } from 'next/server';

export const GET: AppRouteRouteModule['handle'] = async function GET(request, { params }) {
  return NextResponse.json({
    params,
    hello: 123,
  })
}
