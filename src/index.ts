import {
    ViewerApp,
    AssetManagerPlugin,
    addBasePlugins,
    CanvasSnipperPlugin,
    FileTransferPlugin,
} from "webgi";

class World {
    assetRoot: string;
    viewer: ViewerApp | undefined;

    constructor() {
        this.assetRoot = "./assets/";
    }

    async initialize(json?: { assetRoot?: string }) {
        if (json?.assetRoot) {
            this.assetRoot = json.assetRoot;
        }
        if (!this.assetRoot.endsWith('/')) {
            this.assetRoot += '/';
        }

        const canvas = document.getElementById('webgi-canvas') as HTMLCanvasElement;
        const viewer = this.viewer = new ViewerApp({ canvas });

        viewer.renderer.displayCanvasScaling = Math.max(2, window.devicePixelRatio);

        await viewer.addPlugin(AssetManagerPlugin);
        await viewer.addPlugin(CanvasSnipperPlugin);
        await addBasePlugins(viewer);
        await viewer.addPlugin(FileTransferPlugin);

        viewer.renderer.refreshPipeline();

        await viewer.load(this.assetRoot + "classic-watch.glb");
    }

    setBackgroundColor(val: string) {
        this.viewer!.scene.setBackgroundColor(val);
    }

    setCameraDistance(d: number) {
        this.viewer!.scene.activeCamera.position.normalize().multiplyScalar(d);
        this.viewer!.scene.activeCamera.positionUpdated();
    }

    resetCamera() {
        (this.viewer!.scene.activeCamera.controls as any).reset();
    }
}

export const world = new World();
