
import Head from 'next/head'
import React from 'react'

function CoreHead({ headtitle }) {
  return (
    <Head>
    <title>{headtitle ? `xerocodee-${headtitle}` : "xerocodee"}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
  </Head>
  )
}

export default CoreHead