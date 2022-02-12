import { DocumentMetadata, DocumentModificationOptions } from '../abstract/document.mjs';
import { Document } from '../abstract/module.mjs';
import * as CONST from '../constants.mjs';
import * as data from '../data/data.mjs';
import type { MacroDataConstructorData } from '../data/data.mjs/macroData';
import { BaseUser } from './baseUser';

type MacroMetadata = Merge<
  DocumentMetadata,
  {
    name: 'Macro';
    collection: 'macros';
    label: 'DOCUMENT.Macro';
    labelPlural: 'DOCUMENT.Macros';
    isPrimary: true;
    types: [typeof CONST.MACRO_TYPES.SCRIPT, typeof CONST.MACRO_TYPES.CHAT];
    permissions: {
      create: 'PLAYER';
      // TODO: fix when fixed by foundry (https://gitlab.com/foundrynet/foundryvtt/-/issues/6694)
      // update: undefined;
      // delete: undefined;
    };
  }
>;

/**
 * The base Macro model definition which defines common behavior of an Macro document between both client and server.
 */
export declare class BaseMacro extends Document<data.MacroData, null, MacroMetadata> {
  /** @override */
  static get schema(): typeof data.MacroData;

  /** @override */
  static get metadata(): MacroMetadata;

  /** @override */
  protected _preCreate(
    data: MacroDataConstructorData,
    options: DocumentModificationOptions,
    user: BaseUser
  ): Promise<void>;

  /** @override */
  testUserPermission(
    user: BaseUser,
    permission: keyof typeof foundry.CONST.DOCUMENT_PERMISSION_LEVELS | foundry.CONST.DOCUMENT_PERMISSION_LEVELS,
    { exact }: { exact?: boolean }
  ): boolean;
}
