import React from "react";

interface IAsyncLoaderProps {
    load: Promise<any>;
    location?: any;
    match?: any;
}

export default class Async extends React.Component<IAsyncLoaderProps, any> {
    private cancelUpdate: boolean = false;
    private component: any;

    public componentWillMount(): void {
        this.cancelUpdate = false;
        this.props.load.then((component: any) => {
            this.component = component;
            if (!this.cancelUpdate) {
                this.forceUpdate();
            }
        });
    }

    public componentWillUnMount(): void {
        this.cancelUpdate = true;
    }

    public render(): JSX.Element | null {
        const { ...componentProps } = this.props;
        const returnComponent = this.component ?
            this.component.default ?
                <this.component.default {...componentProps} /> :
                <this.component {...componentProps} />
            : null;
        return returnComponent;
    }
}