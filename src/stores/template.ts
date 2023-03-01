import {acceptHMRUpdate, defineStore} from "pinia";

// Replace name with the name you want to bestow
// :%s/Modulename/name/g


type ModulenameState = {
    foo: string;
}

export const useModulename = defineStore("Modulename", {
    state: (): ModulenameState => ({foo: "bar"}),
    actions: {
        add() {
            this.foo += this.foo;
        },
    },
    // Getters are not really needed as state is exposed
    getters: {
        triple: (state) => state.foo + state.foo ?? "",
        // other getters with this
        // qudroupole() {return state.foo + this.triple}
    },
});

// hot module replacement
if (import.meta?.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useModulename, import.meta.hot));
}
