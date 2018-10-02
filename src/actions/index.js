import React from 'react';


export function updateTime () {
    return {
        type: 'UPDATE_TIME',
        payload: new Date().toLocaleTimeString()
    }
}


