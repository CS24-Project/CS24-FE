export interface Choice {
	number: number;
	content: string;
}

export interface QuestionData {
	id: number;
	content: string;
	hint: string;
	choices: Choice[];
}

export const questionData: QuestionData[] = [
	{
		id: 1,
		content: '다음 중 운영체제(OS)에서 멀티프로세싱(Multiprocessing)에 대한 설명으로 올바른 것은?',
		hint: '이 방식은 여러 개의 코어를 활용하는 것이므로, 단일 코어에서 여러 프로세스를 실행하는 방식은 아닙니다.',
		choices: [
			{ number: 1, content: '멀티프로세싱은 하나의 CPU에서 여러 개의 스레드를 실행하는 기법이다.' },
			{ number: 2, content: '멀티프로세싱은 하나의 프로세스 내에서 여러 개의 스레드를 실행하는 방식이다.' },
			{ number: 3, content: '멀티프로세싱은 여러 개의 CPU 또는 코어에서 여러 개의 프로세스를 실행하는 방식이다.' },
			{ number: 4, content: '멀티프로세싱은 프로세스 간의 메모리 공유가 불가능하다.' },
		],
	},
	{
		id: 2,
		content: '다음 중 운영체제(OS)에서 스레드(Thread)에 대한 설명으로 올바른 것은?',
		hint: '스레드는 프로세스의 실행 단위로, 여러 개의 스레드가 하나의 프로세스 내에서 동시에 실행될 수 있습니다.',
		choices: [
			{ number: 1, content: '스레드는 프로세스와는 독립적으로 실행되는 단위이다.' },
			{ number: 2, content: '스레드는 프로세스 내에서만 실행될 수 있다.' },
			{ number: 3, content: '스레드는 프로세스보다 더 많은 자원을 소모한다.' },
			{ number: 4, content: '스레드는 메모리를 공유하지 않는다.' },
		],
	},
	{
		id: 3,
		content: '다음 중 운영체제(OS)에서 컨텍스트 스위칭(Context Switching)에 대한 설명으로 올바른 것은?',
		hint: '컨텍스트 스위칭은 CPU가 현재 실행 중인 프로세스의 상태를 저장하고, 다음에 실행할 프로세스의 상태를 불러오는 과정입니다.',
		choices: [
			{ number: 1, content: '컨텍스트 스위칭은 프로세스 간의 메모리 공유를 의미한다.' },
			{ number: 2, content: '컨텍스트 스위칭은 CPU가 동시에 여러 프로세스를 실행하는 것이다.' },
			{ number: 3, content: '컨텍스트 스위칭은 프로세스의 상태를 저장하고 불러오는 과정이다.' },
			{ number: 4, content: '컨텍스트 스위칭은 프로세스 간의 통신을 의미한다.' },
		],
	},
];
  