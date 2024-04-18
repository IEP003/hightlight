import { ComponentType, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'

export const Wrapper = 
    (
    WrappedComponent: ComponentType, 
    WrapperComponent: ComponentType<{ children: ReactNode }>
    ) => (props: JSX.IntrinsicAttributes) => (   
    <WrapperComponent>
        <WrappedComponent {...props}/>
    </WrapperComponent>
)
