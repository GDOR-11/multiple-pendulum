/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_joint_free(a: number): void;
export function joint_new(a: number, b: number): number;
export function joint_apply_constraint(a: number): void;
export function __wbg_vec2_free(a: number): void;
export function __wbg_get_vec2_x(a: number): number;
export function __wbg_set_vec2_x(a: number, b: number): void;
export function __wbg_get_vec2_y(a: number): number;
export function __wbg_set_vec2_y(a: number, b: number): void;
export function vec2_new(a: number, b: number): number;
export function vec2_length(a: number): number;
export function __wbg_point_free(a: number): void;
export function __wbg_get_point_locked(a: number): number;
export function __wbg_set_point_locked(a: number, b: number): void;
export function __wbg_get_point_pos(a: number): number;
export function __wbg_set_point_pos(a: number, b: number): void;
export function __wbg_get_point_last_pos(a: number): number;
export function __wbg_set_point_last_pos(a: number, b: number): void;
export function point_new(a: number, b: number, c: number): number;
export function point_step(a: number, b: number, c: number): void;
export function __wbg_world_free(a: number): void;
export function world_new(a: number): number;
export function world_add_point(a: number, b: number): number;
export function world_add_joint(a: number, b: number): number;
export function world_get_point(a: number): number;
export function world_step(a: number, b: number, c: number): void;
export function __wbg_get_world_gravity(a: number): number;
export function __wbg_set_world_gravity(a: number, b: number): void;
