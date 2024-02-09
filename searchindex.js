Search.setIndex({"docnames": ["cvat/annotating", "cvat/exporting", "cvat/getting-started", "intro", "misc/blueberry", "misc/demosite", "misc/docsite", "misc/terms", "roboflow/annotating", "roboflow/exporting", "roboflow/getting-started", "scripts/scripts", "scripts/software", "yolo/cross-validation", "yolo/lambda-linux", "yolo/training", "yolo/validating", "yolo/venv"], "filenames": ["cvat\\annotating.md", "cvat\\exporting.md", "cvat\\getting-started.md", "intro.md", "misc\\blueberry.md", "misc\\demosite.md", "misc\\docsite.md", "misc\\terms.md", "roboflow\\annotating.md", "roboflow\\exporting.md", "roboflow\\getting-started.md", "scripts\\scripts.md", "scripts\\software.md", "yolo\\cross-validation.md", "yolo\\lambda-linux.md", "yolo\\training.md", "yolo\\validating.md", "yolo\\venv.md"], "titles": ["Annotating", "Exporting an Annotated Dataset (to Lambda)", "Getting Started with CVAT", "Welcome to the Rowan Blueberry Docs", "What Blueberries Look Like", "Demo Website", "How to Work on the Documentation Website (This Site!)", "Important Terms &amp; Definitions", "Annotating", "Exporting an Annotated Dataset", "Getting Started with Roboflow", "Custom-Made Scripts for this Project", "Software for the project", "How to Perform K-Fold Cross-Validation with YOLOv5", "Preparing Lambda &amp; Familiarizing with Linux", "Training a YOLOv5 Model", "Validating a YOLOv5 Model", "Virtual Environments in Python Projects"], "terms": {"In": [0, 1, 2, 8, 10, 14, 17], "thi": [0, 2, 3, 8, 9, 10, 12, 14, 17], "section": [0, 1, 2, 8, 9, 10, 17], "we": [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 14, 17], "discuss": [0, 8], "onli": [0, 1, 7, 8], "how": [0, 1, 2, 3, 4, 7, 8, 14, 17], "roboflow": [7, 8, 9, 12], "previou": [0, 3, 8], "student": [0, 1, 2, 8, 9, 10, 12], "our": [0, 1, 2, 7, 8, 10, 11], "specif": [2, 8, 10], "data": [0, 1, 7, 8, 9, 10, 11, 14, 17], "veri": [0, 1, 2, 4, 8], "straight": 8, "forward": 8, "process": [1, 2, 8, 10, 11, 17], "click": [0, 1, 2, 8, 9, 10], "onto": [1, 8, 12], "job": [0, 8], "ha": [0, 1, 2, 3, 8, 10], "been": [3, 8], "assign": [1, 2, 8, 10, 11], "you": [0, 1, 2, 4, 7, 8, 9, 10, 11, 14, 17], "whomev": 8, "ani": [0, 1, 8, 9, 14], "pictur": [1, 2, 8, 10], "yet": 8, "now": [0, 1, 2, 8, 9, 12, 17], "ar": [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 14, 17], "greet": [2, 8, 10], "your": [0, 1, 2, 8, 10, 14, 17], "new": [0, 1, 8, 10, 14, 17], "home": 8, "forese": 8, "futur": 8, "The": [2, 4, 7, 8, 9, 11, 14, 17], "chose": [8, 9], "sit": 8, "background": [0, 7, 8, 11], "while": [8, 17], "go": [1, 8, 9, 14], "essenti": [2, 8, 11], "draw": [0, 8], "box": [0, 1, 2, 7, 8], "around": [0, 8], "everi": 8, "blueberri": [0, 8, 10], "Not": [8, 10], "necessarili": 8, "just": [1, 8, 9], "moment": [8, 9], "To": [0, 1, 2, 8, 11, 14, 17], "first": [8, 9, 10, 17], "zoom": [0, 8, 9], "spot": 8, "idea": [8, 10], "entir": [0, 8], "much": [8, 10], "els": [8, 9], "what": [0, 1, 3, 8, 10, 14], "call": [1, 8, 11, 17], "bound": [0, 2, 7, 8], "differ": [1, 4, 7, 8, 11, 14], "vari": 8, "follow": [1, 8, 10, 11, 14, 17], "gener": [7, 8, 10, 17], "rule": 8, "have": [0, 1, 2, 8, 9, 10, 11, 12, 14, 17], "snug": 8, "berri": [0, 1, 2, 4, 8], "person": 8, "i": [0, 7, 8, 9, 14, 17], "do": [0, 2, 4, 8, 9, 10, 14], "view": [0, 7, 8, 10], "problem": [1, 8], "bit": [0, 1, 8], "loos": 8, "my": [0, 2, 8, 14], "opinion": 8, "later": [1, 8], "see": [0, 1, 3, 4, 8, 10, 11, 17], "some": [0, 2, 7, 8, 9, 11], "exampl": [0, 1, 2, 8, 17], "from": [1, 2, 8, 10, 11, 14], "so": [0, 1, 2, 8, 9, 10, 11, 14, 17], "should": [1, 2, 4, 8, 9, 10, 11, 17], "give": [1, 8], "good": [8, 10], "done": [8, 9], "did": [0, 8], "quit": 8, "fit": [0, 8], "import": [0, 1, 3, 8, 10, 11], "correct": [1, 8, 10], "mistak": 8, "soon": 8, "thei": [0, 1, 8, 14, 17], "made": [1, 3, 8, 12, 14], "adjust": [0, 8], "With": [0, 1, 2, 8, 17], "finish": [2, 8, 12], "all": [0, 1, 8, 11, 17], "make": [0, 1, 8, 9, 10, 11, 14, 17], "sure": [0, 8, 14], "right": [0, 1, 8, 14, 17], "group": [8, 10], "typo": 8, "difficult": [0, 8], "revers": 8, "larg": [7, 8], "scale": 8, "fix": [0, 8, 12], "manual": [8, 9, 17], "step": [1, 8, 9, 10, 11], "accur": [0, 8], "two": [1, 8], "green": [0, 1, 4, 8], "blue": [0, 1, 2, 4, 8], "depend": [1, 7, 8, 9], "stage": [4, 8], "project": [1, 3, 7, 8, 14], "mai": [0, 1, 8, 14], "chang": [0, 1, 2, 8], "goal": 8, "dataset": [0, 3, 7, 8, 10, 11, 12, 14], "whatev": [8, 17], "label": [0, 1, 2, 8, 10], "tip": [0, 8], "1": [1, 2, 8, 9], "thing": [1, 8, 9, 10], "easier": [1, 8, 11], "recommend": [0, 8, 14], "lot": [0, 8], "same": [0, 1, 2, 8, 11], "type": [0, 1, 2, 7, 8, 11], "save": [0, 1, 7, 8, 11, 14, 17], "last": [0, 3, 8], "switch": [1, 8], "add": [1, 2, 8, 9, 17], "time": [0, 4, 8], "take": [1, 8, 11], "which": [0, 1, 2, 4, 8, 9, 10, 11], "alreadi": [0, 2, 8, 17], "lengthi": 8, "2": [1, 2, 3, 8, 9, 11], "There": [1, 8, 10, 11], "coupl": 8, "keyboard": [0, 8], "shortcut": [0, 8], "worth": 8, "know": [0, 1, 2, 4, 8, 17], "us": [1, 2, 7, 8, 9, 11, 14], "workflow": 8, "more": [0, 1, 2, 4, 8, 9, 14], "effici": 8, "faster": [8, 11], "d": 8, "drag": 8, "tool": [0, 2, 7, 8], "can": [0, 1, 2, 7, 8, 9, 10, 11, 12, 14, 17], "move": 8, "imag": [0, 1, 2, 7, 8, 9, 10, 11, 12], "b": 8, "back": [8, 11], "both": [8, 11], "found": [1, 8], "hand": [0, 8, 9, 10], "side": [0, 8, 10], "howev": 8, "an": [0, 3, 7, 8, 17], "even": 8, "wai": [1, 2, 8, 9, 17], "By": [8, 11, 17], "hold": [1, 8, 14], "ctrl": [8, 14], "temporarili": 8, "mode": 8, "onc": [7, 8, 9, 10, 14], "let": [0, 1, 2, 8, 14, 17], "automat": [8, 9], "If": [0, 1, 2, 8, 9, 10, 17], "happen": 8, "hit": 8, "backspac": 8, "twice": 8, "remov": [1, 8], "advic": 8, "up": [0, 1, 2, 7, 8, 14, 17], "user": [7, 8, 17], "s": [0, 1, 2, 3, 4, 8, 14, 17], "discret": 8, "brandon": [3, 8], "mchenri": [3, 8], "like": [0, 1, 3, 8, 10, 11, 12, 17], "lower": 8, "left": [8, 9, 10], "corner": 8, "work": [0, 1, 2, 3, 8, 11, 17], "whole": [2, 8, 10], "column": 8, "slide": [0, 8], "over": [0, 4, 8, 9], "top": [0, 1, 8], "bottom": [1, 8], "And": [1, 7, 8, 10, 11], "repeat": 8, "note": [1, 8, 14], "ensur": [0, 8, 17], "miss": [0, 8], "cluster": [0, 8], "feel": [0, 8], "free": [7, 8], "method": [8, 9], "want": [0, 1, 8, 9, 10, 14], "python": [3, 7], "librari": [], "readi": [], "copi": 9, "destin": [1, 9], "choos": [0, 2, 9], "cp": [], "r": 17, "drone": [1, 2, 3, 14, 17], "tranch29": [], "python_env": [], "path": [1, 14], "directori": [1, 11, 14, 17], "prefer": 10, "order": [1, 7, 17], "start": [1, 3, 4, 7], "cd": 14, "wherev": [14, 17], "locat": [1, 14], "Then": [1, 14], "run": [1, 2, 7, 11, 14, 17], "sourc": [9, 14, 17], "bin": [11, 14, 17], "activ": [], "termin": [2, 9], "input": 7, "tag": [], "whenev": [], "command": [2, 7, 14, 17], "its": [1, 4, 7, 11], "instal": 17, "simpli": [9, 10, 17], "deactiv": [], "execut": [1, 7, 17], "default": [1, 10, 14, 17], "binari": 17, "guid": [2, 9, 10], "help": [1, 2, 4, 7, 9, 10], "prospect": [2, 9, 10], "complet": [0, 9], "train": [1, 3, 7, 9, 14], "yolo": [1, 7, 9], "model": [3, 7, 9], "well": [7, 9], "tab": [9, 10], "toolbar": 9, "reason": 9, "need": [1, 2, 9, 11, 14, 17], "split": 9, "valid": [1, 3, 7, 9, 14], "test": [1, 7, 9, 11], "fold": [3, 7, 9], "past": [7, 9], "would": [0, 9], "90": 9, "10": [2, 9], "yolov5": [1, 9, 11], "after": [0, 7, 9, 11], "augment": [7, 9], "explain": 9, "becaus": [1, 2, 7, 9], "cross": [3, 7, 9], "purpos": [9, 14], "script": [1, 7, 9, 12, 17], "n": [0, 9], "separ": [1, 9], "set": [0, 2, 7, 9, 10, 14, 17], "plan": 9, "keep": [0, 7, 9], "100": [2, 9, 11], "haven": 9, "t": [0, 1, 9, 17], "realli": 9, "preprocess": 9, "option": [1, 2, 9, 10], "won": 9, "cover": [0, 9, 17], "3": [2, 9], "4": [9, 11], "cocosplit": 9, "robosplit": 9, "one": [0, 1, 9, 17], "crop": 9, "photo": [2, 9, 10], "76": 9, "78": 9, "5": [2, 9], "here": [1, 9, 10, 14], "per": 9, "creat": [0, 1, 2, 3, 7, 9, 12, 14], "convert": 9, "usabl": 9, "coco": 9, "old": [1, 9, 11], "fashion": 9, "anyth": [9, 17], "v5": 9, "pytorch": 9, "code": [9, 17], "linux": [1, 3, 7, 9], "where": [0, 1, 4, 7, 9, 14], "transit": [2, 10], "next": [2, 10, 17], "detail": [1, 2, 10], "annot": [2, 3, 4, 7, 10], "fairli": 10, "simpl": [10, 17], "school": [2, 10], "email": [2, 10], "address": [2, 10], "usual": 10, "professor": [2, 10], "h": [0, 2, 10], "nguyen": [2, 10], "facilit": 10, "ad": 10, "workspac": 10, "belong": 10, "pleas": [10, 12, 14, 17], "talk": 10, "open": [0, 1, 10, 14], "look": [0, 1, 3, 7, 10], "attach": 10, "exist": [0, 1, 7, 10, 17], "when": [0, 1, 4, 10, 11], "requir": [1, 10, 14], "upload": [2, 10], "each": [0, 2, 10, 17], "uniqu": [2, 7, 10], "name": [1, 2, 7, 10, 14, 17], "referenc": 10, "ex": [10, 11], "dsc_2237": 10, "etc": [0, 1, 2, 10], "phone": 10, "camera": 10, "enough": 10, "But": [1, 4, 10], "alwai": 10, "own": [2, 10, 17], "style": 10, "itself": [7, 10], "sampl": 10, "repres": 10, "case": [1, 4, 10], "bush": [0, 1, 2, 10], "date": 10, "wa": [0, 10], "collect": 10, "them": [1, 2, 7, 10, 11, 14], "newli": [2, 10], "peopl": [2, 10], "team": [3, 10, 12], "multipl": [0, 10], "along": 10, "screen": [0, 1, 10], "most": [1, 4, 10, 12], "version": [1, 3, 10, 17], "someon": 10, "shown": 10, "final": [1, 10], "begin": [0, 4, 10], "document": [1, 3, 14, 17], "were": 3, "math": [2, 3, 7], "depart": [2, 3, 7], "combin": 3, "chau": 3, "6": 3, "28": 3, "2023": [1, 3], "tabl": 3, "content": 3, "below": [1, 3], "quick": 3, "access": 3, "get": [3, 4], "export": [0, 3], "environ": [3, 7], "setup": 11, "deepsort": [], "demo": 3, "websit": [1, 3], "also": [1, 2, 11, 14], "jupyt": [], "mean": [1, 2], "includ": 11, "book": [], "As": [0, 1, 11], "emb": [], "html": [], "post": [], "add_": [], "align": [], "mbox": [], "la_": [], "tex": [], "end": [], "escap": [], "dollar": [], "sign": [], "For": [14, 17], "inform": [0, 1, 2, 14], "about": [], "check": 11, "out": [0, 1, 7, 11], "matplotlib": [], "rcparam": [], "cycler": [], "pyplot": [], "plt": [], "numpi": [], "np": [], "ion": [], "modulenotfounderror": [], "traceback": [], "recent": 12, "cell": [], "line": [11, 17], "No": [], "modul": [], "random": [1, 11], "state": [], "reproduc": [], "seed": [1, 11], "19680801": [], "logspac": [], "0": [], "randn": [], "ii": [], "rang": [], "arrai": [], "cmap": [], "cm": [], "coolwarm": [], "ax": [], "prop_cycl": [], "color": [1, 2], "linspac": [], "line2d": [], "custom_lin": [], "lw": [], "fig": [], "subplot": [], "figsiz": [], "plot": [], "legend": [], "cold": [], "medium": [], "hot": [], "interact": [], "lambda": [3, 7, 11, 12, 17], "server": [1, 2, 7], "befor": [1, 2, 4, 7, 14, 17], "login": 2, "folder": [1, 2, 11, 12, 14], "clone": 11, "ocho": [], "lytic": [], "git": [2, 14], "http": 2, "github": [], "com": [], "ultralyt": 7, "format": 1, "select": [0, 1, 7], "avail": [], "appli": [], "appropri": [], "NO": [], "sinc": [], "perform": [3, 7], "those": [1, 17], "outsid": [], "modal": [], "pop": 1, "dropdown": [1, 2], "bar": 2, "under": [], "show": [0, 17], "download": [1, 12], "radio": [], "continu": [0, 1, 2], "afterward": [], "few": [], "insid": 1, "mkdir": 14, "blueberry_dataset": [], "doe": 1, "matter": [], "dump": [], "current": [1, 7, 11, 17], "configur": [1, 2, 7], "yaml": 1, "file": [7, 11, 12], "structur": 12, "edit": 1, "vim": [], "nano": 14, "re": [0, 1, 17], "val": [1, 11], "These": [1, 7, 11], "instruct": [14, 17], "level": 1, "basic": [], "py": [1, 11], "paramet": 11, "epoch": [], "output": [7, 11, 17], "highli": 0, "list": [0, 12], "argument": [], "pass": [], "It": [0, 1, 11], "parse_opt": [], "function": 1, "weight": [], "exp": [], "number": [1, 17], "best": [0, 1], "pt": [], "ll": [2, 14, 17], "feed": [], "particular": [], "video": 2, "somewher": [], "detect": [1, 7], "result": 14, "again": 2, "A": [2, 7, 17], "full": 11, "variabl": 4, "flag": 7, "contextlib": [], "exitstack": [], "0x2069b6c8e10": [], "numer": 12, "program": [1, 12], "assist": 12, "page": [1, 2, 12], "serv": 12, "releas": [1, 12], "variou": [1, 12], "v1": 12, "softwar": [1, 3], "initi": [7, 12], "produc": [1, 2, 12], "scp": [1, 12], "bug": 12, "zip": [1, 12], "longer": [11, 12], "contain": [3, 11, 12, 14], "parent": 12, "root": 12, "01": 12, "02": 12, "0x1db61aa8dd0": [], "jpg": 12, "extens": 12, "support": 12, "progress": [0, 5, 6, 11, 13, 15, 16], "object": [0, 7], "rectangl": 0, "press": [0, 14], "kei": 0, "mention": [0, 1], "earlier": 0, "dedic": 0, "non": [0, 7], "domin": 0, "second": 0, "auto": 0, "class": [0, 1], "down": [0, 1], "until": 0, "encount": 0, "addit": [0, 14], "snake": 0, "pattern": [0, 7], "without": [0, 1, 2, 17], "Be": 0, "tightli": 0, "hundr": 0, "thousand": 0, "sloppi": 0, "thankfulli": 0, "wouldn": 0, "suggest": 0, "hyper": 0, "fixat": 0, "tini": 0, "larger": 0, "due": [0, 11], "occlus": [0, 7], "shadow": 0, "leav": 0, "harder": [0, 4], "challeng": 0, "especi": 0, "stack": 0, "hide": 0, "often": 0, "visibl": 0, "Or": [0, 1, 2], "fulli": 0, "shouldn": 0, "try": 0, "tri": 0, "mani": [0, 2, 11], "blurri": 0, "blob": 0, "center": [0, 1], "distinguish": 0, "individu": 0, "altern": 0, "between": [0, 7], "mous": 0, "wheel": 0, "perspect": 0, "effect": 0, "host": [2, 7], "share": [2, 17], "rowan": 2, "local": [1, 2, 7], "through": 2, "port": 2, "localhost": 2, "quickli": 2, "review": 2, "explor": [1, 2], "normal": 2, "cisco": 2, "vpn": 2, "kind": [1, 2, 7], "ssh": 2, "putti": 2, "mobaxterm": 2, "bash": 2, "powershel": 2, "mchenr49": [2, 14], "lambda04": 2, "edu": 2, "replac": [1, 2, 14], "part": [1, 2, 11], "8080": 2, "l": 2, "ve": 2, "browser": 2, "hieu": 2, "account": 2, "On": [1, 2], "organ": [1, 2, 7], "e": [1, 2, 7], "g": [1, 2], "count": 2, "small": [2, 4, 11], "batch": 2, "brand": 2, "unlik": 2, "relev": 2, "wish": [1, 2, 17], "submit": 2, "far": 2, "subsequ": [1, 2, 11], "inherit": 2, "defin": 2, "obtain": 2, "drive": 2, "advanc": 2, "qualiti": 2, "size": [2, 7, 11], "segment": [2, 7], "uneven": 2, "possibl": [1, 2], "refer": 2, "frame": 2, "across": 2, "custom": [1, 3], "prepar": 3, "familiar": 3, "virtual": [3, 7, 14], "term": 3, "definit": 3, "growth": 4, "cycl": 4, "obviou": 4, "characterist": 4, "round": 4, "shape": 4, "crown": 4, "arguabl": 4, "pad": 4, "cup": 4, "ripe": 4, "pink": 4, "At": [4, 14], "almost": 4, "red": 4, "slightli": 14, "increas": [7, 14], "product": 14, "alias": 14, "speed": 14, "text": 14, "editor": 14, "o": 14, "enter": 14, "close": [1, 14], "x": 14, "must": [1, 14], "repo": 14, "razzberry7": 14, "fork": 14, "organiz": 14, "training_data": [1, 14], "design": 14, "validation_data": 14, "predict": [7, 11, 14], "subdirectori": [1, 14], "txt": [1, 14], "lastli": [1, 14], "come": [14, 17], "handi": 14, "yolov5_script": [11, 14], "either": [1, 11, 14], "abov": [1, 14, 17], "deep": 7, "learn": [7, 17], "subset": 7, "machin": 7, "concern": 7, "stand": 7, "cvat": 7, "comput": 7, "vision": 7, "paid": 7, "onlin": 7, "intend": [7, 11], "drawn": 7, "blockag": 7, "anoth": [1, 7], "bashrc": 7, "isol": 7, "singl": [7, 11], "techniqu": 7, "manipul": 7, "pipe": 7, "send": 7, "shell": 7, "seri": [1, 7], "nohup": [7, 11], "append": [7, 11], "put": [7, 11, 14, 17], "comet": 7, "platform": [1, 7], "ml": 7, "compil": 7, "report": 7, "base": 7, "assess": 7, "independ": 7, "robust": 7, "partit": 7, "rest": 7, "underfit": 7, "unabl": 7, "captur": 7, "relationship": 7, "overfit": 7, "relat": [1, 7, 17], "pick": 7, "rather": 7, "than": 7, "maximum": 7, "suppress": 7, "overlap": 7, "standard": 17, "practic": 17, "allow": [1, 11, 17], "global": 17, "easili": 17, "other": [0, 11, 17], "id": 17, "pycharm": 17, "visual": 17, "studio": 17, "mitig": 17, "scratch": 17, "tradition": [1, 17], "your_nam": [1, 17], "virtualenv": 17, "python_env2": 17, "empti": 17, "cursor": 17, "within": [1, 11, 17], "easiest": 17, "quickest": 17, "respect": 17, "fortun": 17, "pretti": 17, "pip": 17, "owner": 17, "present": [1, 17], "unfortun": 17, "freez": 17, "filenam": 17, "portion": 17, "doesn": 17, "otherwis": 17, "overwrit": 17, "site": 3, "resourc": 1, "intens": 1, "util": [1, 11, 14], "power": 1, "troublesom": 1, "task": 1, "action": 1, "drop": 1, "menu": 1, "enabl": 1, "toggl": 1, "convent": 1, "outlin": 1, "extract": 1, "actual": 1, "isn": 1, "kept": 1, "could": 1, "problemat": 1, "resolv": 1, "research": 1, "fall": 1, "match": 1, "older": 1, "blindli": 1, "whether": 1, "guess": 1, "special": 1, "think": 1, "store": 1, "someth": 1, "dataset_nam": 1, "nc": 1, "valu": 1, "rel": 1, "repositori": [1, 11], "incorrect": 1, "error": 1, "don": [1, 17], "easi": 1, "tell": 1, "mess": [], "tediou": 1, "applic": 1, "expedit": 1, "18": 1, "24": [1, 11], "NOT": 1, "mac": 1, "perhap": 1, "core": 1, "capabl": 1, "brows": 1, "window": 1, "displai": 1, "refactor": 1, "describ": 1, "certain": [1, 14], "percentag": 1, "transfer": 1, "remot": 1, "fill": 1, "usernam": 1, "password": 1, "previous": 1, "origin": 1, "still": 1, "scorch": 1, "json": 1, "load": 1, "TO": 1, "pane": 1, "correctli": 1, "specifi": [1, 11], "ing": 1, "newer": 1, "scheme": 1, "exit": 17, "That": 1, "absolut": 1, "avoid": 1, "issu": 1, "mnt": 1, "data2": 1, "ceh": 1, "k": 3, "IN": [5, 6, 11, 13, 15, 16], "7": 11, "easy_v": 11, "fold_train": 11, "quick_val": 11, "yolo_predictor": 11, "print_dir": 11, "random_se": 11, "save_hyp": 11, "yolo_quick_fix": 11, "being": 11, "randomli": 11, "replic": 11, "divid": 11, "3000x4000": 11, "640x640": 11, "dimens": 11, "tile": 11, "better": 11, "squar": 11, "stitch": 11, "togeth": 11, "why": 11, "instead": 11, "necessari": 11, "log": 11, "off": 11, "parameter1": 11, "parameter2": 11, "consol": 11, "typic": 14, "read": 14, "readm": 14, "THE": 12, "oldest": 12, "univers": 3, "ai": 3, "member": 3, "tran": 3, "updat": 3, "8": 3, "2024": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"annot": [0, 1, 8, 9], "get": [0, 2, 8, 10], "start": [0, 2, 8, 10], "deepsort": [], "demo": 5, "websit": [5, 6], "environ": [14, 17], "setup": 14, "clone": 14, "The": [1, 10], "us": [3, 17], "exit": [], "export": [1, 9, 12], "an": [1, 9, 10], "dataset": [1, 2, 9], "gener": 9, "new": [2, 9], "version": [9, 12], "roboflow": [1, 3, 10], "creat": [10, 17], "account": 10, "home": 10, "page": 10, "project": [2, 10, 11, 12, 17], "welcom": 3, "rowan": 3, "blueberri": [3, 4], "doc": 3, "content": [], "notebook": [], "markdown": [], "myst": [], "code": [], "block": [], "output": [], "yolov5": [3, 13, 14, 15, 16], "repositori": 14, "custom": [11, 14], "data": [], "prepar": 14, "step": [], "1": [11, 12, 14], "2": 14, "3": 14, "4": 14, "5": 14, "6": [], "7": [], "train": [11, 15], "infer": [], "updat": [], "histori": [], "softwar": 12, "cvat": [0, 1, 2, 3, 12], "helper": [1, 12], "initi": [], "can": [], "produc": [], "like": [2, 4], "file": [1, 14, 17], "structur": 1, "scp": [], "onto": 2, "lambda": [1, 2, 14], "bug": [], "fix": [], "finish": [], "zip": [], "longer": [], "contain": [], "parent": [], "root": [], "folder": [], "imag": [], "jpg": [], "extens": [], "ar": [], "now": [], "support": [], "other": [], "script": [3, 11, 14], "usual": 0, "case": 0, "medium": 0, "hard": 0, "exampl": [], "student": [], "conclus": [0, 1, 2], "log": 2, "connect": 2, "via": 2, "open": 2, "tab": 2, "make": 2, "model": [1, 2, 11, 15, 16], "task": 2, "job": 2, "addit": 2, "what": [2, 4], "look": [2, 4], "tool": 3, "misc": 3, "familiar": 14, "linux": 14, "edit": 14, "bashrc": 14, "add": 14, "alia": 14, "es": 14, "import": 7, "term": 7, "definit": 7, "virtual": 17, "python": 17, "download": 17, "packag": 17, "from": 17, "requir": 17, "txt": 17, "made": 11, "thi": [1, 6, 11], "how": [6, 13], "work": 6, "document": 6, "site": 6, "after": 1, "recreat": 1, "button": 1, "set": 1, "activ": 17, "deactiv": 17, "time": 11, "dataset_assign": 11, "py": [], "fullbushdivid": 11, "k": [11, 13], "fold": [11, 13], "cross": [11, 13], "valid": [11, 13, 16], "perform": 13, "chang": 14, "config": 14, "ini": 14, "valu": 14, "x": 12}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})