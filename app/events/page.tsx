"use client"
import React, { useState, useEffect } from 'react';
import getEvents from '@/actions/getEvent';
import { NavVertical, NavHorizontal, Events } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';
import { EventType } from '@/types';
import { ToasterProvider } from '@/providers/toast-provider';


export default function Home() {
 

  return (
    <>

          <Events/>
    </>
  );
}

