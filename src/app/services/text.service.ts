import { Injectable } from '@angular/core';
import { removeForbiddenChar } from '../default-data/forbiden-chars';
import { defaultText } from '../default-data/default-text';

class TextState {
  text = '';
  startTextPointer = 0;
}

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private textState = new TextState();
  private currentTextPointer = 0;

  private readonly localStorageTextStateKey = 'text-state';

  constructor() {
    this.loadState();
  }

  private loadState(): void {
    const textStateFromStorage = JSON.parse(
      localStorage.getItem(this.localStorageTextStateKey)
    ) as TextState;

    if (textStateFromStorage?.text) {
      this.textState = textStateFromStorage;
    } else {
      this.textState = new TextState();
      this.textState.text = defaultText;
    }

    this.currentTextPointer = this.textState.startTextPointer;
  }

  public saveState(): void {
    localStorage.setItem(
      this.localStorageTextStateKey,
      JSON.stringify(this.textState)
    );
  }

  public setNewText(str: string): void {
    this.textState.text = removeForbiddenChar(str);
    this.textState.startTextPointer = 0;
    this.saveState();
    location.reload();
  }

  public getNextChar(): string {
    if (this.currentTextPointer >= this.textState.text.length) {
      this.currentTextPointer = 0;
    }

    const char = this.textState.text.slice(
      this.currentTextPointer,
      this.currentTextPointer + 1
    );

    this.currentTextPointer = this.currentTextPointer + 1;

    return char;
  }

  public resetText(): void {
    this.setNewText(defaultText);
  }

  public resetCurrentTextPointer(): void {
    this.currentTextPointer = this.textState.startTextPointer;
  }

  public getText(): string {
    return this.textState.text;
  }

  public setNextStartTextPoint(): void {
    this.textState.startTextPointer += 1;
    if (this.textState.startTextPointer >= this.textState.text.length) {
      this.textState.startTextPointer = 0;
    }
  }

  // setNullState(): void {
  //   this.appState = {
  //     startTextPointer: 0,
  //     times: 0,
  //     presses: 0,
  //   };
  //   this.activateState();
  //   this.saveState();
  // }
}
