export default class Tree {
    w: number; //width
    h: number; //height
    x: number; // x coordinates
    y: number; // y coordinates
    c: Tree[]; // children
    cs: number; // number of children
    prelim: number;
    mod: number;
    shift: number;
    change: number;
    tl?: Tree; // Left and right thread
    tr?: Tree;
    el: Tree; // Extreme left and right nodes
    er: Tree;
    msel: number; // Sum of modifiers at the extreme nodes
    mser: number;

    constructor(width: number, height: number, y: number, children: Tree[]) {
        this.w = width;
        this.h = height;
        this.y = y;
        this.c = children;
        this.cs = children.length;

        this.x = 0;
        this.prelim = 0;
        this.mod = 0;
        this.shift = 0;
        this.change = 0;

        if (this.cs === 0) {
            this.el = this;
            this.er = this;
            this.msel = this.mser = 0;
        } else {
            this.el = this.c[0].el;
            this.msel = this.c[0].msel;
            this.er = this.c[this.cs - 1].er;
            this.mser = this.c[this.cs - 1].mser;
        }
    }
}
